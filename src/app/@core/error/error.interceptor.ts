///<reference path="../../../../node_modules/@angular/common/http/src/interceptor.d.ts"/>
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from '../service/authentication/authentication.service';
import {ToastrService} from 'ngx-toastr';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _toastr: ToastrService, private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authenticationService.cleanStorageAndCookies();
          location.reload(true);
        }
      }
    });
  }
}
