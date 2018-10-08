import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';
import {PagesComponent} from './pages.component';
import {ErrorsComponent} from '../../@core/error/errors-components/errors.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'maps',
    component: MapViewComponent,
  },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: '',
      redirectTo: 'maps',
      pathMatch: 'full',
    },
    {
      path: 'bad-path', component: ErrorsComponent,
    },
    {
      path: '**', redirectTo: '/bad-path'
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
