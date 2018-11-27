import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainHeaderComponent} from './header.component';
import {SidenavComponent} from '../../sidenav/sidenav.component';
import {FooterComponent} from '../../footer/main-footer/footer.component';
import {LoginHeaderComponent} from '../login-header/login-header.component';
import {LoginFooterComponent} from '../../footer/login-footer/login-footer.component';
import {MenuListItemComponent} from '../../sidenav/menu-list-item/menu-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {MatModule} from '../../../mat.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../../app.module';
import {RouterTestingModule} from '@angular/router/testing';


describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

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
        RouterTestingModule,
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
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
