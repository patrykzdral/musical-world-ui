import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';
import {PagesComponent} from './pages.component';
import {ErrorsComponent} from '../../@core/error/errors-components/errors.component';
import {NewConcertComponent} from './concerts/new-concert/new-concert.component';
import {ConcertsListComponent} from './concerts/concerts-list/concerts-list.component';
import {ConcertDetailsComponent} from './concerts/concerts-list/concert-details/concert-details.component';
import {ConcertDetailsResolver} from './concerts/concerts-list/concert-details/concert-details.resolver';
import {AdminConcertsComponent} from './concerts/admin-concerts/admin-concerts.component';
import {AdminConcertsDetailsComponent} from './concerts/admin-concerts/admin-concerts-details/admin-concerts-details.component';
import {ProfileEditComponent} from './profile/profile-edit/profile-edit.component';
import {ProfileDeleteComponent} from './profile/profile-delete/profile-delete.component';
import {MainPageGuard} from '../../shared/guards/main-page.guard';
import {AuthGuard} from '../../shared/guards/auth.guard';
import {AdminConcertsDetailsResolver} from './concerts/admin-concerts/admin-concerts-details/admin-concerts-details.resolver';
import {ProfilePictureUploadComponent} from './profile/profile-edit/profile-picture-upload/profile-picture-upload.component';
import {ProfilePictureChangeComponent} from './profile/profile-picture-change/profile-picture-change.component';
import {UnauthorizedComponent} from '../auth/unauthorized/unauthorized.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'maps',
    component: MapViewComponent,
    canActivate: [MainPageGuard]
  },
    {
      path: '',
      redirectTo: 'maps',
      pathMatch: 'full',
    },
    {
      path: 'concerts',
      children: [
        {
          path: 'create-new',
          component: NewConcertComponent,
          canActivate: [AuthGuard]

        },
        {
          path: 'show-all',
          children: [
            {
              path: '',
              component: ConcertsListComponent,
              canActivate: [AuthGuard]

            },
            {
              path: 'concert/:id',
              component: ConcertDetailsComponent,
              resolve: {
                concert: ConcertDetailsResolver
              },
              canActivate: [AuthGuard]

            }
          ]
        },
        {
          path: 'admin-concerts',
          children: [
            {
              path: '',
              component: AdminConcertsComponent,
              canActivate: [AuthGuard]
            },
            {
              path: 'details/:id',
              component: AdminConcertsDetailsComponent,
              resolve: {
                concert: AdminConcertsDetailsResolver
              },
              canActivate: [AuthGuard]

            }
          ]
        },
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: 'edit',
          component: ProfileEditComponent,
          canActivate: [AuthGuard]

        },
        {
          path: 'picture-change',
          component: ProfilePictureChangeComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'delete',
          component: ProfileDeleteComponent,
          canActivate: [AuthGuard]
        }
      ]
    },
    {
      path: 'bad-path', component: ErrorsComponent,
    },
    {
      path: 'unauthorized', component: UnauthorizedComponent,
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
