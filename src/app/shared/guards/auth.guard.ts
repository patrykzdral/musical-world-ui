import {Injectable} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../@core/service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  activated: boolean;

  constructor(private _route: ActivatedRoute, public _toastr: ToastrService, public _authenticationService: AuthenticationService, public _router: Router,) {
  }

  canActivate(): boolean {
    if (!this._authenticationService.checkCredentials()) {
      this._toastr.info('Unuthorized access');
      this._router.navigate(['unauthorized']);
      return false;
    }
    return true;

  }
}
