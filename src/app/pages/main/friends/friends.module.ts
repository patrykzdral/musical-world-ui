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
import { FriendPendingComponent } from './friend-pending/friend-pending.component';
import {FriendRequestComponent} from './friend-request/friend-request.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';

@NgModule({
  declarations: [
    FriendsComponent,
    FriendPendingComponent,
    FriendRequestComponent,
    MyFriendsComponent,
    FriendPendingComponent
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
