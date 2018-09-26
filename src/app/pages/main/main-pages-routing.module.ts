import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';
import {ErrorsComponent} from '../../@core/error/errors-components/errors.component';
import {PagesComponent} from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'maps',
    component: MapViewComponent,
  },{
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full',
  }, {
    path: '**',
    component: ErrorsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
