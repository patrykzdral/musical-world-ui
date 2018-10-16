import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user.model';
import {AuthHttpService} from '../http/auth-http.service';
import {Concert} from '../../model/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private _authHttpService: AuthHttpService) { }

  getAll(): Observable<Concert[]>{
    return this._authHttpService.findAll('/musicalworld/rest/api/concerts/');
  }

  getById(id: number) {
    return this._authHttpService.get('/musicalworld/rest/api/concerts/' + id);
  }

   create(concert: Concert) {
    return this._authHttpService.save('/musicalworld/rest/api/concerts/new', concert);
  }
}
