import { Injectable } from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CheckAccessService {

  constructor(private _authHttpService: AuthHttpService) {
  }
  checkAccess(): Observable<boolean> {
    return this._authHttpService.findAll('/musicalworld/rest/api/check-access');
  }
}
