import {Component, OnInit} from '@angular/core';
import {UserWithPhotoModel} from '../profile-picture-change/user-with-photo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../../@core/service/user/user.service';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.scss']
})
export class YourProfileComponent implements OnInit {

  user: UserWithPhotoModel;
  hasProfile = false;
  imageToShow: any;


  constructor(private route: ActivatedRoute, private _toastrService: ToastrService, private _userService: UserService, private _router: Router) {
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


}
