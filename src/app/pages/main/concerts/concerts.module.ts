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
import { ConcertInstrumentElementComponent } from './new-concert/concert-instrument-element/concert-instrument-element.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { ConcertsListComponent } from './concerts-list/concerts-list.component';
import { ConcertsListItemComponent } from './concerts-list/concerts-list-item/concerts-list-item.component';
import { ConcertDetailsComponent } from './concert-details/concert-details.component';
import {AgGridModule} from 'ag-grid-angular';
import {AuthInterceptor} from '../../../@core/interceptor/auth.interceptor';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    MatModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    //BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AgGridModule
  ],
  declarations: [
    ConcertsComponent,
    NewConcertComponent,
    ConcertInstrumentElementComponent,
    ConcertsListComponent,
    ConcertsListItemComponent,
    ConcertDetailsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ]
})
export class ConcertsModule {
}
