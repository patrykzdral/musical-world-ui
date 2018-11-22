import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {_throw} from 'rxjs-compat/observable/throw';
import {first} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertApplicationModel} from '../../../../../@core/model/concert-application.model';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';

@Injectable({
  providedIn: 'root'
})
export class AdminConcertsDetailsResolver implements Resolve<ConcertApplicationModel[]> {
  constructor(private concertApplicationService: ConcertApplicationService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ConcertApplicationModel[]> {
    const id = parseInt(route.params.id, 10);
    console.log(id);
    if (isNaN(id)) {
      return this.navigateToAllConcerts();
    }
    else {
      this.concertApplicationService.getConcertApplications(id)
        .pipe(first())
        .subscribe(data => {
            return data;
          },
          error => {
            console.log(error)
          }
        );
    }
    // } else {
    //   console.log("check");
    //   return this.concertApplicationService.getConcertApplications(id).pipe(
    //
    //     catchError(() => {
    //       return this.navigateToAllConcerts();
    //     })
    //   );
    // }
  }

  private navigateToAllConcerts() {
    this.router.navigate(['/pages/concerts/show-all/']);
    return _throw('Book could not be found');
  }
}
