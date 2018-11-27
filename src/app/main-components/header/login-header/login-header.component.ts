import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  setLang: any;

  constructor(private _router: Router, private _translateService: TranslateService) {
  }

  ngOnInit() {

  }

  changeLang(lang: any) {
    this._translateService.use(lang);
  }

  navigateToMainPage() {
    this._router.navigate(['/']);
  }
}
