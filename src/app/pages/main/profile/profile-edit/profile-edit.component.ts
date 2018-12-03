import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  noPhotoPath: '/assets/concert/new_event.png';

  constructor(private _route: ActivatedRoute, private _toastrService: ToastrService, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {

    this._route.data.subscribe((data: { user: UserWithPhotoModel }) => {
        if (data.user) {
          this.user = data.user;
          if (this.user.photo) {
            console.log("check");
            this.imageToShow = this.user.photo;
            this.hasProfile = true;
          }
        } else {
          this._router.navigate(['/']);

        }
      }
    );
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
