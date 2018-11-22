import {NgModule} from '@angular/core';
import {ErrorsComponent} from './errors-components/errors.component';
import {AuthModule} from '../../pages/auth/auth.module';
import {MatModule} from '../../mat.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    MatModule
  ],
  exports: [
    ErrorsComponent
  ],

  providers: []
})
export class ErrorModule { }
