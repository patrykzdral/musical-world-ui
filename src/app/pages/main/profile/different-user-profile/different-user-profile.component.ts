import {Component, OnInit} from '@angular/core';
import {UserWithPhotoModel} from '../profile-picture-change/user-with-photo.model';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../../@core/service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-different-user-profile',
  templateUrl: './different-user-profile.component.html',
  styleUrls: ['./different-user-profile.component.scss']
})
export class DifferentUserProfileComponent implements OnInit {

  user: UserWithPhotoModel;
  hasProfile = false;
  imageToShow: any;


  constructor(private route: ActivatedRoute, private _toastrService: ToastrService, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: UserWithPhotoModel }) => {
        if (data.user) {
          this.user = data.user;
          if (this.user.photo) {
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


  refreshPage() {

  }
}
