import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {NavService} from '../../../@core/service/navigation/nav.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<boolean>();
  setLang: any;
  username: any;

  navToggle() {
    this.toggleSideNav.emit(true);
  }

  constructor(private _translate: TranslateService, private _router: Router, public navService: NavService) { }

  ngOnInit() {
    this.username = JSON.parse( localStorage.getItem('currentUser') ).username;
  }

  showProfile() {
    this._router.navigate(['/pages/profile']);
  }

  logOut(){
    this._router.navigate(['/auth/logout']);
  }

  changeLang() {
    this._translate.use(this.setLang);
  }

}
