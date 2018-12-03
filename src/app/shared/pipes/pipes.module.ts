import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {FilterPipe} from './filter-pipe';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from '../../mat.module';
import {FormsModule} from '@angular/forms';
import {FriendsFilter} from './friends-filter';

@NgModule({
  declarations: [
    SafeUrlPipe,
    FilterPipe,
    FriendsFilter
  ],
  imports: [
    HttpClientModule,
    MatModule,
    FormsModule,
  ],
  exports: [
    SafeUrlPipe,
    FilterPipe,
    FriendsFilter
  ],

  providers: [SafeUrlPipe, FilterPipe,FriendsFilter],
})
export class PipesModule {
}
