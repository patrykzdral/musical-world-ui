import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  setLang: any;
  constructor(private translate: TranslateService) { }

  ngOnInit() {

  }
  changeLang() {
    this.translate.use(this.setLang);
  }
}
