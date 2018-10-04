import {NgModule} from '@angular/core';
import {MapViewComponent} from './map-view.component';
import {AgmCoreModule} from '@agm/core';
//import {MapComponent} from '../map/map.component';

@NgModule({
  declarations: [
    MapViewComponent,
 //   MapComponent
  ],
  imports: [
    AgmCoreModule
  ],
  exports: [
    MapViewComponent,
 //   MapComponent

  ],

  providers: []
})
export class MapViewModule {
}
