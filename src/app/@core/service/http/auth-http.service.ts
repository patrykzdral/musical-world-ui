import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Params, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthHttpService extends HttpClient{

  constructor(handler: HttpHandler, private cookieService: CookieService ) {
    super(handler);
  }
  createAuthorizationHeader() : HttpHeaders {
    const token = this.cookieService.get('access_token');
    const headers = new HttpHeaders({'Authorization':'bearer '+token});
    console.log(headers.get('Authorization'));

    return headers;
  }

  findOne(url: string, id: any): Observable<any> {
    let headers = this.createAuthorizationHeader();
    return super.get(url+'/'+id ,{
      headers: headers
    });
  }



  delete(url: string, id: any): Observable<any> {
    let headers = this.createAuthorizationHeader();
    return super.delete(url+'/'+id ,{
      headers: headers
    });
  }

  deleteWithParams(url: string, params: HttpParams): Observable<any> {
    let headers = this.createAuthorizationHeader();
    return super.delete(url ,{
      headers: headers,
      params: params
    });
  }

  findAll(url: string): Observable<any> {
    let headers = this.createAuthorizationHeader();
    return super.get(url, {
      headers: headers,
    });
  }

  save(url: string, object: any) {
    let headers = this.createAuthorizationHeader();
    return super.post(url, object, {
      headers: headers
    });
  }
  put(url: string, object: any,params: Params): Observable<any> {
    console.log("PUT");
    let headers = this.createAuthorizationHeader();
    return super.put(url, object, {
      headers: headers,
      params
    });
  }

  findAllWithParams(url: string, params: Params) : Observable<any> {
    let headers = this.createAuthorizationHeader();
    console.log(headers);
    return super.get(url ,{
      params,
      headers: headers
    });
  }
}
