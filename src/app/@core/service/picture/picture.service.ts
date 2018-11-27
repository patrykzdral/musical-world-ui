import {Injectable} from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {HttpClient, HttpRequest} from '@angular/common/http';

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


  pushFileToStorage(file: File) {
    const formdata: FormData = new FormData();
    const headers = this._authHttpService.createAuthorizationHeader();
    formdata.append('file', file);
    return this._httpClient.post('/musicalworld/rest/api/picture/new', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });
  }

  pushFileToStorageAndRapportProgressAndAssignToUser(file: File) {
    const formdata: FormData = new FormData();
    const headers = this._authHttpService.createAuthorizationHeader();

    formdata.append('file', file);

    const req = new HttpRequest('POST', '/musicalworld/rest/api/picture/user', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });

    return this._httpClient.request(req);
  }

  pushFileToStorageAndRapportProgressAndAssignToConcert(file: File, concertId: number) {
    const formdata: FormData = new FormData();
    const headers = this._authHttpService.createAuthorizationHeader();

    formdata.append('file', file);
    formdata.append('id', concertId.toString());

    const req = new HttpRequest('POST', '/musicalworld/rest/api/picture/concert', formdata, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });

    return this._httpClient.request(req);
  }

}
