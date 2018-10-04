import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {RequestPasswordComponent} from './pages/auth/request-password/request-password.component';
import {ResetPasswordComponent} from './pages/auth/reset-password/reset-password.component';
import {ErrorsComponent} from './@core/error/errors-components/errors.component';
import {AccountActivatedComponent} from './pages/auth/account-activated/account-activated.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/main/main-pages.module#MainPagesModule' },
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
        path: 'account-activated',
        component: AccountActivatedComponent,
      },

    ],
  },
   {
     path: '**', component: ErrorsComponent,
   },
];
const config: ExtraOptions = {
  useHash: true,
};
export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes, config);

