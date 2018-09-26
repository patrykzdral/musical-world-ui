import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HttpService extends HttpClient{


  findOne(url: string, id: any): Observable<any> {
    return super.get(url + '/' + id);
  }

  findAll(url: string): Observable<any> {
    return super.get(url);
  }

  save(url: string, object: any) {
    return super.post(url, object);
  }

  findAllWithParams(url: string, params: Params) : Observable<any> {
    return super.get(url + '/',{params});
  }

}
