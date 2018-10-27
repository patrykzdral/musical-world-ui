import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';
import {PagesComponent} from './pages.component';
import {ErrorsComponent} from '../../@core/error/errors-components/errors.component';
import {ProfileComponent} from './profile/profile.component';
import {NewConcertComponent} from './concerts/new-concert/new-concert.component';
import {ProfileEditComponent} from './profile/profile-edit/profile-edit.component';
import {ConcertsListComponent} from './concerts/concerts-list/concerts-list.component';
import {ConcertDetailsComponent} from './concerts/concert-details/concert-details.component';
import {ConcertDetailsResolver} from './concerts/concert-details/concert-details.resolver';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'maps',
    component: MapViewComponent,
  },
    {
      path: 'profile',
      children:[
        {
          path: "edit",
          component: ProfileEditComponent
        }
      ]
    },
    {
      path: '',
      redirectTo: 'maps',
      pathMatch: 'full',
    },
    {
      path: 'concerts',
      children:[
        {
          path: "create-new",
          component: NewConcertComponent
        },
        {
          path: 'show-all',
          component: ConcertsListComponent,

        },
        {
          path: 'show-all/concert/:id',
          component: ConcertDetailsComponent,
          resolve: {
            concert: ConcertDetailsResolver
          }
        }
      ]
    },
    {
      path: 'bad-path', component: ErrorsComponent,
    },
    {
      path: '**', redirectTo: '/bad-path'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
