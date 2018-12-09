import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {FilterPipe} from './filter-pipe';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from '../../mat.module';
import {FormsModule} from '@angular/forms';
import {FriendsFilter} from './friends-filter';
import {MyFriendsFilter} from './my-friends-filter';

@NgModule({
  declarations: [
    SafeUrlPipe,
    FilterPipe,
    FriendsFilter,
    MyFriendsFilter
  ],
  imports: [
    HttpClientModule,
    MatModule,
    FormsModule,
  ],
  exports: [
    SafeUrlPipe,
    FilterPipe,
    FriendsFilter,
    MyFriendsFilter
  ],

  providers: [SafeUrlPipe, FilterPipe, FriendsFilter, MyFriendsFilter],
})
export class PipesModule {
}
