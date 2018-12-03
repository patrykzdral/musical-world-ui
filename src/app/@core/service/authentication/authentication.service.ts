import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {ToastrService} from 'ngx-toastr';
import {CheckAccessService} from '../check-access/check-access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _checkAccessService: CheckAccessService, private _router: Router, private _http: HttpClient, private _cookieService: CookieService
    , private _userService: UserService, private _toastr: ToastrService) {
  }

  static isExpired(token) {
    const date = Number(token);
    return new Date().valueOf() > date;
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
    return this._http.post('/musicalworld/rest/oauth/token', params.toString(), {
      headers: headers
    })
      .pipe(first())
      .subscribe(
        data => {
          this.saveToken(data, loginData.username);
          this._toastr.success('Login successful');
        }
        ,
        err => this._toastr.error('Wrong username or password!')
      );
  }

  cleanStorageAndCookies() {
    this._cookieService.delete('access_token');
    this._cookieService.delete('access_token_expire_date');
    localStorage.removeItem('currentUser');
  }

  saveToken(token, login) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    this._cookieService.set('access_token', token.access_token, expireDate);
    this._cookieService.set('access_token_expire_date', expireDate.toString());
    this.saveUserInLocalStorage(login);
    setTimeout(() => {
      this._router.navigate(['/']);
    }, 500);
  }

  saveUserInLocalStorage(username: string) {
    this._userService.getByUsername(username).toPromise().then(res => {
        if (res != null) {
          console.log(res);
          console.log(JSON.stringify(res));
          localStorage.setItem('currentUser', JSON.stringify(res));
        } else {
          this._router.navigate(['/auth/login']);
        }
      },
      (err) => {
        console.log(err);
      });
  }


}
