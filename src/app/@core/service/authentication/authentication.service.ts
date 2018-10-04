import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first, map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {reject, resolve} from 'q';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthenticationService implements OnDestroy{
  constructor(private _router: Router, private http: HttpClient, private cookieService: CookieService
    , private userService: UserService, private toastr: ToastrService) {
  }

  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'patrykzdral');
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('patrykzdral:verysecretpassword')
    });
    console.log(headers);
    return this.http.post('/musicalworld/rest/oauth/token', params.toString(), {
      headers: headers
    })
      .pipe(first())
      //.pipe(map(res => res.json()))
      .subscribe(
        data => {
          console.log(data);
          this.saveToken(data, loginData.username);
          this.toastr.success('Login successful');
        }
        ,
        err => this.toastr.error(err)
      );
  }

  logout() {
    // remove user from local storage to log user out
    this.cookieService.delete('access_token');
    this.cookieService.delete('access_token_expire_date');
    localStorage.removeItem('currentUser');
  }

  saveToken(token, login) {
    console.log(token.expires_in);
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    console.log(expireDate);
    this.cookieService.set('access_token', token.access_token, expireDate);
    this.cookieService.set('access_token_expire_date', expireDate.toString());
    this.saveUserInLocalStorage(login);
    this._router.navigate(['/']);
  }

  saveUserInLocalStorage(username: string) {
    this.userService.getByUsername(username).toPromise().then(res => {
        if ( res != null) {
          console.log(JSON.stringify(res));
          localStorage.setItem('currentUser', JSON.stringify(res));
        } else { this._router.navigate(['/auth/login']); }
      },
      (err) => {
        console.log(err);
      });
  }

  checkCredentials() {
    console.log(localStorage.getItem('currentUser'));
    if (!this.cookieService.check('access_token') || !this.cookieService.check('access_token_expire_date') ) {
      this._router.navigate(['/auth/login']);
    }
    else{
      if (AuthenticationService.isExpired(this.cookieService.get('access_token_expire_date'))) {
        this.cookieService.delete('access_token');
        this.cookieService.delete('access_token_expire_date');

        this._router.navigate(['/auth/login']);
      }
    }

  }

  static isExpired(token) {
    const date = Number(token);
    return new Date().valueOf() > date;
  }

  ngOnDestroy(): void {
  }
}
