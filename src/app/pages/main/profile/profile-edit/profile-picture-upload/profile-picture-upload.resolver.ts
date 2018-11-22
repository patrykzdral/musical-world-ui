import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {_throw} from 'rxjs-compat/observable/throw';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertService} from '../../../../../@core/service/concert/concert.service';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {ConcertApplicationModel} from '../../../../../@core/model/concert-application.model';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';
import {User} from '../../../../../@core/model/user.model';
import {UserService} from '../../../../../@core/service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureUploadResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return undefined;
  }

  // resolve(route: ActivatedRouteSnapshot): Observable<User> {
  //   const id = parseInt(route.params.id, 10);
  //   console.log(id);
  //   if (isNaN(id)) {
  //     return this.navigateToMap();
  //   } else {
  //     return this.userService.getByUsername(localStorage.getItem('currentUser')).pipe(
  //       catchError(() => {
  //         return this.navigateToMap();
  //       })
  //     );
  //   }
  // }
  //
  // private navigateToMap() {
  //   this.router.navigate(['/pages/map/']);
  //   return _throw('User could not be found');
  // }
}
