import {Injectable} from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';
import {ConcertApplicationModel} from '../../model/concert-application.model';
import {ConcertApplicationChangeModel} from '../../model/concert-application-change.model';
import {ConcertApplicationExamineModel} from '../../model/concert-application-examine.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertApplicationService {

  private concertInstrumentUrl = '/musicalworld/rest/api/concert-applications';

  constructor(private _authHttpService: AuthHttpService) {
  }

  save(concertApplication: ConcertApplicationModel) {
    return this._authHttpService.save('/musicalworld/rest/api/concert-applications/new', concertApplication);
  }

  getConcertApplications(id: any): Observable<ConcertApplicationChangeModel[]> {
    return this._authHttpService.findAll('/musicalworld/rest/api/concert-applications/list/' + id);
  }

  examineConcertApplication(concertApplication: ConcertApplicationExamineModel) {
    return this._authHttpService.save('/musicalworld/rest/api/concert-applications/examine', concertApplication);
  }
}
