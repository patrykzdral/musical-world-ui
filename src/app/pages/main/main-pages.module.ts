import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './main-pages-routing.module';
import {MapViewModule} from './map-view/map-view.module';
import {ErrorModule} from '../../@core/error/error.module';
import {MainComponentsModule} from '../../main-components/main-components.module';
import { ProfileComponent } from './profile/profile.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ConcertsComponent } from './concerts/concerts.component';
import { NewConcertComponent } from './concerts/new-concert/new-concert.component';
import {MatMonthView} from '@angular/material';
import {MatModule} from '../../mat.module';
import {ConcertsModule} from './concerts/concerts.module';
import {ProfileModule} from './profile/profile.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MapViewModule,
    ConcertsModule,
    ProfileModule,
    MainComponentsModule,
    ErrorModule,
    AngularFontAwesomeModule,
    MatModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class MainPagesModule {
}
