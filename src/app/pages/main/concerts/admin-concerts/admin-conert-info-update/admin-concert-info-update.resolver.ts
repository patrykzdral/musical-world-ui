import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {_throw} from 'rxjs-compat/observable/throw';
import {ConcertService} from '../../../../../@core/service/concert/concert.service';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';

@Injectable({
  providedIn: 'root'
})
export class AdminConcertInfoUpdateResolver implements Resolve<ConcertWithPhotoModel> {
  constructor(private _concertService: ConcertService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ConcertWithPhotoModel> {
    const id = parseInt(route.params.id, 10);
    console.log(id);
    if (isNaN(id)) {
      return this.navigateToAllAdminConcerts();
    } else {
      return this._concertService.getById(id).pipe(
        catchError(() => {
          return this.navigateToAllAdminConcerts();
        })
      );
    }
  }

  private navigateToAllAdminConcerts() {
    this.router.navigate(['/pages/concerts/admin-concerts/']);
    return _throw('Book could not be found');
  }
}
