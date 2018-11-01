import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthHttpService} from '../http/auth-http.service';
import {Concert} from '../../model/concert.model';
import {ConcertModel} from '../../model/get-model/concert.model';
import {Instrument} from '../../model/intrument.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private _authHttpService: AuthHttpService) {
  }

  getAll(): Observable<ConcertModel[]> {
    return this._authHttpService.findAll('/musicalworld/rest/api/concerts/');
  }

  getAllAdminEvents(name: string): Observable<ConcertModel[]> {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/admin', {name});
  }

  getById(id: number): Observable<ConcertModel> {
    return this._authHttpService.findOne('/musicalworld/rest/api/concerts/', id);
  }

  create(concert: Concert) {
    return this._authHttpService.save('/musicalworld/rest/api/concerts/new', concert);
  }
  delete(id: any) {
    return this._authHttpService.delete('/musicalworld/rest/api/concerts/admin/delete' ,id);
  }

  displayFilteredConcerts(name?: any, instruments?: Instrument[], dateFrom?: Date, dateTo?: Date): Observable<ConcertModel[]> {
    let params = <any>{};
    if (name) {
      console.log(name);
      params.name = name;
    }
    if (instruments) {
      console.log(instruments);
      params.instruments = instruments;
    }
    if (dateFrom) {
      console.log(dateFrom);
      params.dateFrom = dateFrom;
    }
    if (dateTo) {
      console.log(dateTo);
      params.dateTo = dateTo;
    }

    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/filtered', params);
  }

  // displayFilteredConcertss(filterData:FilterData):Observable<ConcertModel[]>{
  //   // let params = <FilterData>{};
  //   // if(name) {console.log(name); params.name=name;}
  //   // if(instruments){console.log(instruments); params.instruments=instruments;}
  //   // if(dateFrom){console.log(dateFrom); params.dateFrom=dateFrom;}
  //   // if(dateTo){console.log(dateTo); params.dateTo=dateTo;}
  //
  //   return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/filtered',{filterData});
  // }


}
