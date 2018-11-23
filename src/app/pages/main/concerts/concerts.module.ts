import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatModule} from '../../../mat.module';
import {NewConcertComponent} from './new-concert/new-concert.component';
import {NgModule} from '@angular/core';
import {ConcertsComponent} from './concerts.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {ConcertInstrumentElementComponent} from './new-concert/concert-instrument-element/concert-instrument-element.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {ConcertsListComponent} from './concerts-list/concerts-list.component';
import {ConcertsListItemComponent} from './concerts-list/concerts-list-item/concerts-list-item.component';
import {AgGridModule} from 'ag-grid-angular';
import {AuthInterceptor} from '../../../@core/interceptor/auth.interceptor';
import {AdminConcertsComponent} from './admin-concerts/admin-concerts.component';
import {ConcertDetailsComponent} from './concerts-list/concert-details/concert-details.component';
import {AdminConcertsItemComponent} from './admin-concerts/admin-concerts-item/admin-concerts-item.component';
import {AdminConcertsDetailsComponent} from './admin-concerts/admin-concerts-details/admin-concerts-details.component';
import {AdminConcertApplicationComponent} from './admin-concerts/admin-concerts-details/admin-concert-application/admin-concert-application.component';
import {PictureUploadComponent} from './new-concert/picture-upload/picture-upload.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SnackBarDeleteConcertComponent} from './admin-concerts/admin-concerts-item/snack-bar-delete-concert/snack-bar-delete-concert.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import { AdminConertInfoUpdateComponent } from './admin-concerts/admin-conert-info-update/admin-conert-info-update.component';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    MatModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    //BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AgGridModule,
    PipesModule
  ],
  declarations: [
    SnackBarDeleteConcertComponent,
    ConcertsComponent,
    NewConcertComponent,
    ConcertInstrumentElementComponent,
    ConcertsListComponent,
    ConcertsListItemComponent,
    ConcertDetailsComponent,
    AdminConcertsComponent,
    AdminConcertsItemComponent,
    AdminConcertsDetailsComponent,
    AdminConcertApplicationComponent,
    PictureUploadComponent,
    AdminConertInfoUpdateComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

  ],

  entryComponents: [
    SnackBarDeleteConcertComponent,

  ]
})
export class ConcertsModule {
}