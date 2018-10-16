import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {Instrument} from '../../model/intrument.model';
import {AuthHttpService} from '../http/auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private instrumentUrl = "/musicalworld/rest/api/instruments";

  constructor(private _authHttpService: AuthHttpService){

  }
  findAll(): Observable<Instrument[]>{
    return this._authHttpService.findAll(this.instrumentUrl);
  }
}
