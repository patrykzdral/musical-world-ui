import {NgModule} from '@angular/core';
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

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    MatModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    //BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MainComponentsModule
  ],

  exports: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],

  providers: []
})
export class AuthModule { }
