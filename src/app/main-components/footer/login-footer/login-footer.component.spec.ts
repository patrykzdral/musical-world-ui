import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFooterComponent} from './login-footer.component';
import {SidenavComponent} from '../../sidenav/sidenav.component';
import {FooterComponent} from '../main-footer/footer.component';
import {LoginHeaderComponent} from '../../header/login-header/login-header.component';
import {MainHeaderComponent} from '../../header/main-header/header.component';
import {MenuListItemComponent} from '../../sidenav/menu-list-item/menu-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {MatModule} from '../../../mat.module';
import {HttpLoaderFactory} from '../../../app.module';

describe('LoginFooterComponent', () => {
  let component: LoginFooterComponent;
  let fixture: ComponentFixture<LoginFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
        SidenavComponent,
        FooterComponent,
        LoginHeaderComponent,
        MainHeaderComponent,
        LoginFooterComponent,
        MenuListItemComponent
      ],
      imports: [
        ReactiveFormsModule,
        AngularFontAwesomeModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        PipesModule,
        MatModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
