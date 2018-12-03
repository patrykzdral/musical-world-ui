import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {_throw} from 'rxjs-compat/observable/throw';
import {UserWithPhotoModel} from '../profile-picture-change/user-with-photo.model';
import {UserService} from '../../../../@core/service/user/user.service';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditResolver implements Resolve<UserWithPhotoModel> {
  constructor(private _userService: UserService, private router: Router, private _location: Location) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<UserWithPhotoModel> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    return this._userService.getUserWithPhoto(username).pipe(
      catchError(() => {
        return this.navigateToPreviousPage();
      })
    );

  }

  private navigateToPreviousPage() {
    this._location.back();
    return _throw('User could not be found');
  }
}
