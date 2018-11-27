import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthHttpService} from '../http/auth-http.service';
import {Concert} from '../../model/concert.model';
import {ConcertModel} from '../../model/get-model/concert.model';
import {Instrument} from '../../model/intrument.model';
import {ConcertWithPhotoModel} from '../../model/get-model/concert-with-photo.model';
import {ConcertInstrumentSlot} from '../../model/concert-instrument-slot.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private _authHttpService: AuthHttpService) {
  }

  getAll(): Observable<ConcertModel[]> {
    return this._authHttpService.findAll('/musicalworld/rest/api/concerts/');
  }

  getAllAdminEvents(): Observable<ConcertWithPhotoModel[]> {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/admin', null);
  }

  getAllNotAdminEvents(): Observable<ConcertModel[]> {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/not-user',null);
  }

  getAllNotAdminEventsWithPhoto(): Observable<ConcertWithPhotoModel[]> {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/concerts/not-user-with-photo',null);
  }

  getById(id: number): Observable<ConcertWithPhotoModel> {
    return this._authHttpService.findOne('/musicalworld/rest/api/concerts/', id);
  }

  getByIdWithPhoto(id: number): Observable<ConcertWithPhotoModel> {
    return this._authHttpService.findOne('/musicalworld/rest/api/concerts/with-photo', id);
  }

  create(concert: Concert) {
    return this._authHttpService.save('/musicalworld/rest/api/concerts/new', concert);
  }

  delete(id: any) {
    return this._authHttpService.delete('/musicalworld/rest/api/concerts/admin/delete', id);
  }


  displayFilteredConcerts(name?: any, instruments?: Instrument[],
                          dateFrom?: Date, dateTo?: Date): Observable<ConcertModel[]> {
    console.log(instruments);
    const params = <any>{};
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


  update(concert: ConcertWithPhotoModel) {
    return this._authHttpService.put('/musicalworld/rest/api/concerts/admin/update', concert);

  }

  deleteConcertInstrumentSlots(concertInstrumentSlots: ConcertInstrumentSlot[]) {
    return this._authHttpService.save('/musicalworld/rest/api/concerts/admin/delete-applications', concertInstrumentSlots);
  }
}
