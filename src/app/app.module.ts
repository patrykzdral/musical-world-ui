import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AppComponent} from './app.component';
import {MainComponentsModule} from './main-components/main-components.module';
import {MatModule} from './mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ModuleRouting} from './app-routing.module';
import {AuthModule} from './pages/auth/auth.module';
import {ErrorModule} from './@core/error/error.module';
import {ErrorInterceptor} from './@core/error/error.interceptor';
// import {CookieService} from 'ngx-cookie-service';
import {ToastrModule} from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookieService} from 'ngx-cookie-service';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
import {AgmCoreModule} from '@agm/core';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    MainComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ModuleRouting,
    AuthModule,
    ErrorModule,
    ToastrModule.forRoot(),
    MatProgressButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBEmx5P3vl4ox4OU6nPgwTbU9k-_0Zm6Lo',
      libraries: ["places"]
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
