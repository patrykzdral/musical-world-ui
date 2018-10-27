import { Injectable } from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';
import {Instrument} from '../../model/intrument.model';
import {ConcertApplicationModel} from '../../model/concert-application.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertApplicationService {

  private concertInstrumentUrl = "/musicalworld/rest/api/concert-applications";

  constructor(private _authHttpService: AuthHttpService) { }

  save(concertApplication: ConcertApplicationModel){
    return this._authHttpService.save('/musicalworld/rest/api/concert-applications/new',concertApplication);
  }
}
