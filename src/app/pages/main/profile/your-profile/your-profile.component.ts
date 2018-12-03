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


  constructor(private _route: ActivatedRoute, private _toastrService: ToastrService, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this._route.data.subscribe((data: { user: UserWithPhotoModel }) => {
        if (data.user) {
          this.user = data.user;
          console.log(this.user);
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


}
