import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user.model';
import {AuthHttpService} from '../http/auth-http.service';
import {Concert} from '../../model/concert.model';
import {ConcertModel} from '../../model/get-model/concert.model';
import {Instrument} from '../../model/intrument.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private _authHttpService: AuthHttpService) { }

  getAll(): Observable<ConcertModel[]>{
    return this._authHttpService.findAll('/musicalworld/rest/api/concerts/');
  }

  getById(id: number):Observable<ConcertModel> {
    return this._authHttpService.findOne('/musicalworld/rest/api/concerts/', id);
  }

   create(concert: Concert) {
    return this._authHttpService.save('/musicalworld/rest/api/concerts/new', concert);
  }

  displayFilteredConcerts(name:any,instruments: Instrument[],dateFrom: any, dateTo: any):Observable<ConcertModel[]>{
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/filterd',{name,instruments,dateFrom,dateTo});
  }
}
