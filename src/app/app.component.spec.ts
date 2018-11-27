import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MainComponentsModule} from './main-components/main-components.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatModule} from './mat.module';
import {FormsModule} from '@angular/forms';
import {ModuleRouting} from './app-routing.module';
import {AuthModule} from './pages/auth/auth.module';
import {ErrorModule} from './@core/error/error.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
import {AgmCoreModule} from '@agm/core';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {ErrorInterceptor} from './@core/error/error.interceptor';
import {HttpLoaderFactory} from './app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        NgbModule,
        // AgGridModule.withComponents([]),
        ToastrModule.forRoot(),
        MatProgressButtonsModule.forRoot(),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBEmx5P3vl4ox4OU6nPgwTbU9k-_0Zm6Lo',
          libraries: ['places']
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
        },
        RouterTestingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'musical-world-ui'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('musical-world-ui');
  }));
});
