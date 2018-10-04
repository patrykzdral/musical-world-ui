import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.username = JSON.parse( localStorage.getItem('currentUser') ).username;
  }

  showProfilePanel() {

  }

  changeLang() {
    this.translate.use(this.setLang);
  }

}
