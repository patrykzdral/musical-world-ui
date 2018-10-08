import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './main-pages-routing.module';
import {MapViewModule} from './map-view/map-view.module';
import {ErrorModule} from '../../@core/error/error.module';
import {MainComponentsModule} from '../../main-components/main-components.module';
import { ProfileComponent } from './profile/profile.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MapViewModule,
    MainComponentsModule,
    ErrorModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
  ],
})
export class MainPagesModule {
}
