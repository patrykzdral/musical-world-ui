import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './main-pages-routing.module';
import {MapViewModule} from './map-view/map-view.module';
import {ErrorModule} from '../../@core/error/error.module';
import {MainComponentsModule} from '../../main-components/main-components.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MapViewModule,
    MainComponentsModule,
    ErrorModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class MainPagesModule {
}
