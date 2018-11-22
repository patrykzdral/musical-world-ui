import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MatModule} from '../../mat.module';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LoginHeaderComponent} from '../../main-components/header/login-header/login-header.component';
import {MainComponentsModule} from '../../main-components/main-components.module';
import {CommonModule} from '@angular/common';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
import { AccountActivatedComponent } from './account-activated/account-activated.component';
import { AuthPageTemplateComponent } from './auth-page-template/auth-page-template.component';
import {AuthPageTemplateForRegistration} from './auth-page-template-for-registration/auth-page-template-for-registration';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    AccountActivatedComponent,
    AuthPageTemplateComponent,
    AuthPageTemplateForRegistration,
    UnauthorizedComponent
  ],
  imports: [
    MatModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MainComponentsModule,
    MatProgressButtonsModule,
    PipesModule
  ],

  exports: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    AccountActivatedComponent,
    AuthPageTemplateForRegistration,
    AuthPageTemplateComponent,
    UnauthorizedComponent

  ],

  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AuthModule { }
