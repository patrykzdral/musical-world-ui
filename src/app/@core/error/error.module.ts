import {NgModule} from '@angular/core';
import {ErrorsComponent} from './errors-components/errors.component';
import {AuthModule} from '../../pages/auth/auth.module';
import {MatModule} from '../../mat.module';
import {SharedModule} from '../../shared/shared.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    MatModule,
    ToastrModule
  ],
  exports: [
    ErrorsComponent
  ],

  providers: []
})
export class ErrorModule {
}
