import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {MatModule} from '../../../mat.module';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainComponentsModule} from '../../../main-components/main-components.module';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {LoginComponent} from '../login/login.component';
import {LogoutComponent} from '../logout/logout.component';
import {RequestPasswordComponent} from '../request-password/request-password.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {AccountActivatedComponent} from '../account-activated/account-activated.component';
import {AuthPageTemplateComponent} from '../auth-page-template/auth-page-template.component';
import {AuthPageTemplateForRegistration} from '../auth-page-template-for-registration/auth-page-template-for-registration';
import {UnauthorizedComponent} from '../unauthorized/unauthorized.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
