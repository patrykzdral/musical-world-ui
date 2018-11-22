import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe
  ],
  imports: [],
  exports: [
    SafeUrlPipe
  ],

  providers: [SafeUrlPipe],
})
export class PipesModule {
}
