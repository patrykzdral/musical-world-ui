import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {RequestPasswordComponent} from './pages/auth/request-password/request-password.component';
import {ResetPasswordComponent} from './pages/auth/reset-password/reset-password.component';
import {AccountActivatedComponent} from './pages/auth/account-activated/account-activated.component';
import {ErrorsComponent} from './@core/error/errors-components/errors.component';
import {TokenCorrectGuard} from './pages/auth/account-activated/token-correct.guard';
import {UnauthorizedComponent} from './pages/auth/unauthorized/unauthorized.component';
import {LicencesComponent} from './pages/auth/licences/licences.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: 'pages', loadChildren: './pages/main/main-pages.module#MainPagesModule'},
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'registration-confirm',
        component: AccountActivatedComponent,
        canActivate: [TokenCorrectGuard]
      }

    ],
  },
  {
    path: 'bad-path', component: ErrorsComponent,
  },
  {
    path: 'unauthorized', component: UnauthorizedComponent,
  },
  {
    path: 'licenses', component: LicencesComponent
  },
  {
    path: '**', redirectTo: '/bad-path'
  },
];
const config: ExtraOptions = {
  useHash: true,
};
export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes, config);

