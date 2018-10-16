import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {MatModule} from '../../../mat.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
  ],
  imports: [
    MatModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    ProfileComponent,
    ProfileEditComponent,

  ],
  providers: []
})
export class ProfileModule {
}
