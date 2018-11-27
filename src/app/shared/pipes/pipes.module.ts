import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {FilterPipe} from './FilterPipe';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from '../../mat.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SafeUrlPipe,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    MatModule,
    FormsModule,
  ],
  exports: [
    SafeUrlPipe,
    FilterPipe
  ],

  providers: [SafeUrlPipe, FilterPipe],
})
export class PipesModule {
}
