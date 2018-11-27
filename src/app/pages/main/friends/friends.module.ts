import {NgModule} from '@angular/core';

import {FriendsComponent} from './friends.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {MatModule} from '../../../mat.module';

@NgModule({
  declarations: [
    FriendsComponent
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
    FriendsComponent
  ],

  providers: []
})
export class FriendsModule {
}
