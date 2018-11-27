import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../@core/service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenCorrectGuard implements CanActivate, OnInit {
  token: any;
  activated: boolean;

  constructor(private _route: ActivatedRoute, public _toastr: ToastrService, public _userService: UserService, public _router: Router, ) {
  }

  canActivate(): boolean {
    setTimeout(() => {
      this._route.queryParams.subscribe(params => {
        this.token = params['token'];
        console.log(this.token);
      });
    }, 500);
    setTimeout(() => {
      this._userService.activateAccount(this.token)
        .pipe(first())
        .subscribe(
          data => {
            this._toastr.info(data);
            this.token = true;
          },
          error => {
            this._toastr.error('Token is invalid or expired');
            this._router.navigate(['/auth/login']);
            this.token = false;
          });
    }, 1000);
    return true;
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log('DUPA' + this.token);
    });
  }
}
