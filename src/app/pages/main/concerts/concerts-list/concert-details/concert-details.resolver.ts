import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {_throw} from 'rxjs-compat/observable/throw';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertService} from '../../../../../@core/service/concert/concert.service';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertDetailsResolver implements Resolve<ConcertWithPhotoModel> {
  constructor(private concertService: ConcertService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ConcertWithPhotoModel> {
    const id = parseInt(route.params.id, 10);
    console.log(id);
    if (isNaN(id)) {
      return this.navigateToAllConcerts();
    } else {
      return this.concertService.getById(id).pipe(
        catchError(() => {
          return this.navigateToAllConcerts();
        })
      );
    }
  }

  private navigateToAllConcerts() {
    console.log('in');
    this.router.navigate(['/pages/concerts/show-all/']);
    return _throw('Book could not be found');
  }
}
