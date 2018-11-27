import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../../@core/service/user/user.service';
import {UserWithPhotoModel} from '../profile-picture-change/user-with-photo.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  user: UserWithPhotoModel;
  hasProfile = false;
  imageToShow: any;

  constructor(private _toastrService: ToastrService, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {

    this._userService.getUserWithPhoto(JSON.parse(localStorage.getItem('currentUser')).username).toPromise().then(res => {
        if (res != null) {
          this.user = res;
          if (res.photo) {
            this.imageToShow = res.photo;
            this.hasProfile = true;
          }

        } else {
        }
      },
      (err) => {
        this._router.navigate(['/']);
        this._toastrService.error(err);
      });
  }

  hasProfilePic() {
    return this.hasProfile;
  }

  editProfile() {

    console.log(this.user);
    this._userService.editUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.info('Profile has been updated! ');
        },
        error => {
          this._toastrService.error(error);
        });

  }

  cancelEdition() {
    this._router.navigate(['/']);
  }
}
