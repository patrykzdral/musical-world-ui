import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatModule} from '../mat.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {MainHeaderComponent} from './header/main-header/header.component';
import {LoginHeaderComponent} from './header/login-header/login-header.component';
import {CommonModule} from '@angular/common';
import {MenuListItemComponent} from './sidenav/menu-list-item/menu-list-item.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LoginFooterComponent} from './footer/login-footer/login-footer.component';
import {FooterComponent} from './footer/main-footer/footer.component';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
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
    TranslateModule,
    PipesModule,
    MatModule
  ],
  exports: [
    LoginHeaderComponent,
    SidenavComponent,
    FooterComponent,
    MainHeaderComponent,
    LoginFooterComponent
  ],

  providers: []
})
export class MainComponentsModule {
}
