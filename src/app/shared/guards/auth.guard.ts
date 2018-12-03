import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../@core/service/authentication/authentication.service';
import {CheckAccessService} from '../../@core/service/check-access/check-access.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  activated: boolean;

  constructor(private _checkAccessService: CheckAccessService, private _route: ActivatedRoute, public _toastr: ToastrService,
              public _authenticationService: AuthenticationService, public _router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {

    return this._checkAccessService.checkAccess().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
        }
      }),
      catchError((err) => {
        this._toastr.info('Unuthorized access');
        this._router.navigate(['unauthorized']);
        return of(false);
      })
    );

  }
}
