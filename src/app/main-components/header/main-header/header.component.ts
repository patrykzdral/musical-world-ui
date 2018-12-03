import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {NavService} from '../../../@core/service/navigation/nav.service';
import {UserService} from '../../../@core/service/user/user.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  hasProfile = false;
  imageToShow: any;
  @Output() toggleSideNav = new EventEmitter<boolean>();
  setLang: any;
  username: any;

  constructor(private _userService: UserService, private _translate: TranslateService,
              private _router: Router, public navService: NavService) {
  }

  navToggle() {
    this.toggleSideNav.emit(true);
  }

  hasProfilePic() {
    return this.hasProfile;
  }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this._userService.getUserWithPhoto(JSON.parse(localStorage.getItem('currentUser')).username).toPromise().then(res => {
        if (res != null) {
          if (res.photo) {
            this.imageToShow = res.photo;
            this.hasProfile = true;
          }
        }
      },
      (err) => {
        console.log(err);
      });
  }

  showProfile() {
    this._router.navigate(['/pages/profile/show']);
  }

  logOut() {
    this._router.navigate(['/auth/logout']);
  }

  changeLang(lang: any) {
    this._translate.use(lang);
  }

  navigateToMainPage() {
    this._router.navigate(['/']);
  }
}
