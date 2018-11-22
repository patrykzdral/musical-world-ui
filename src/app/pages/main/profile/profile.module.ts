import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {MatModule} from '../../../mat.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProfilePictureUploadComponent } from './profile-edit/profile-picture-upload/profile-picture-upload.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import {TranslateModule} from '@ngx-translate/core';
import {SnackBarDeleteProfileComponent} from './profile-delete/snack-bar-delete-profile/snack-bar-delete-profile.component';
import { ProfilePictureChangeComponent } from './profile-picture-change/profile-picture-change.component';
import {SharedModule} from '../../../shared/shared.module';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import { DifferentUserProfileComponent } from './different-user-profile/different-user-profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    ProfilePictureUploadComponent,
    ProfileDeleteComponent,
    SnackBarDeleteProfileComponent,
    ProfilePictureChangeComponent,
    DifferentUserProfileComponent,
  ],
  imports: [
    MatModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    PipesModule
  ],
  exports: [
    ProfileComponent,
    ProfileEditComponent,

  ],
  providers: [],
  entryComponents: [
    SnackBarDeleteProfileComponent
  ]
})
export class ProfileModule {
}
