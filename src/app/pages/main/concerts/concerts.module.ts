import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatModule} from '../../../mat.module';
import {NewConcertComponent} from './new-concert/new-concert.component';
import {NgModule} from '@angular/core';
import {ConcertsComponent} from './concerts.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import { ConcertInstrumentElementComponent } from './new-concert/concert-instrument-element/concert-instrument-element.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

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
    OwlNativeDateTimeModule
  ],
  declarations: [
    ConcertsComponent,
    NewConcertComponent,
    ConcertInstrumentElementComponent
  ],
})
export class ConcertsModule {
}
