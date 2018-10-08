import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';
import {FooterComponent} from './footer/footer.component';
import {MatModule} from '../mat.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {MainHeaderComponent} from './header/main-header/header.component';
import {LoginHeaderComponent} from './header/login-header/login-header.component';
import {CommonModule} from '@angular/common';
import { MenuListItemComponent } from './sidenav/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent,
    LoginHeaderComponent,
    MainHeaderComponent,
    MenuListItemComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    LoginHeaderComponent,
    SidenavComponent,
    FooterComponent,
    MainHeaderComponent,
  ],

  providers: []
})
export class MainComponentsModule {
}
