import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './main-pages-routing.module';
import {MapViewModule} from './map-view/map-view.module';
import {ErrorModule} from '../../@core/error/error.module';
import {MainComponentsModule} from '../../main-components/main-components.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatModule} from '../../mat.module';
import {ConcertsModule} from './concerts/concerts.module';
import {ProfileModule} from './profile/profile.module';
import {SharedModule} from '../../shared/shared.module';
import {PipesModule} from '../../shared/pipes/pipes.module';

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
    MatModule,
    PipesModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: []
})
export class MainPagesModule {
}
