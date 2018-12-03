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
import {ProfilePictureChangeComponent} from './profile/profile-picture-change/profile-picture-change.component';
import {UnauthorizedComponent} from '../auth/unauthorized/unauthorized.component';
import {AdminConcertInfoUpdateComponent} from './concerts/admin-concerts/admin-conert-info-update/admin-concert-info-update.component';
import {AdminConcertInfoUpdateResolver} from './concerts/admin-concerts/admin-conert-info-update/admin-concert-info-update.resolver';
import {DifferentUserProfileComponent} from './profile/different-user-profile/different-user-profile.component';
import {DifferentUserProfileResolver} from './profile/different-user-profile/different-user-profile.resolver';
import {YourProfileComponent} from './profile/your-profile/your-profile.component';
import {FriendsComponent} from './friends/friends.component';
import {ProfileEditResolver} from './profile/profile-edit/profile-edit.resolver';
import {YourProfileResolver} from './profile/your-profile/your-profile.resolver';


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
              path: 'applications/:id',
              component: AdminConcertsDetailsComponent,
              resolve: {
                concert: AdminConcertsDetailsResolver
              },
              canActivate: [AuthGuard]
            },
            {
              path: 'update/:id',
              component: AdminConcertInfoUpdateComponent,
              resolve: {
                concert: AdminConcertInfoUpdateResolver
              },
              canActivate: [AuthGuard]
            }
          ]
        },
      ]
    },
    {
      path: 'friends',
      children: [
        {
          path: '',
          component: FriendsComponent,
          canActivate: [AuthGuard]

        },
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: 'user-profile-show/:username',
          component: DifferentUserProfileComponent,
          resolve: {
            user: DifferentUserProfileResolver
          },
          canActivate: [AuthGuard]
        },
        {
          path: 'show',
          component: YourProfileComponent,
          resolve: {
            user: YourProfileResolver
          },
          canActivate: [AuthGuard]
        },
        {
          path: 'edit',
          component: ProfileEditComponent,
          resolve: {
            user: ProfileEditResolver
          },
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
