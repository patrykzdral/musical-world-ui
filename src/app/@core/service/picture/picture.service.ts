import { Injectable } from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private _authHttpService: AuthHttpService, private _httpClient: HttpClient) {
  }

  // pushFileToStorage(file: File){
  //   let formdata: FormData = new FormData();
  //
  //   formdata.append('file', file);
  //
  //   return this._authHttpService.save('/musicalworld/rest/api/picture/new', FormData);
  // }


  pushFileToStorage(file: File){
    let formdata: FormData = new FormData();
    let headers = this._authHttpService.createAuthorizationHeader();
    formdata.append('file', file);
    return this._httpClient.post('/musicalworld/rest/api/picture/new',formdata,{
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });
  }
  pushFileToStorageAndRaportProgressAndAssignToUser(file: File, username: string){
    let formdata: FormData = new FormData();
    let headers = this._authHttpService.createAuthorizationHeader();

    formdata.append('file', file);
    formdata.append('username', username);

    const req = new HttpRequest('POST', '/musicalworld/rest/api/picture/user', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });

    return this._httpClient.request(req);
  }

}
