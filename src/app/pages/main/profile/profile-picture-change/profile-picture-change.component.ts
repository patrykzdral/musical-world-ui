import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../@core/service/user/user.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-profile-picture-change',
  templateUrl: './profile-picture-change.component.html',
  styleUrls: ['./profile-picture-change.component.scss']
})
export class ProfilePictureChangeComponent implements OnInit {
  hasProfile: boolean = false;
  imageToShow: any;
  constructor(
    private _userService: UserService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this._userService.getUserWithPhoto(JSON.parse(localStorage.getItem('currentUser')).username).toPromise().then(res => {
        if (res != null) {
          this.imageToShow = res.photo;
          this.hasProfile = true;
        } else {
        }
      },
      (err) => {
        console.log(err);
      });
  }

  hasProfilePic() {
    return this.hasProfile;
  }

}
