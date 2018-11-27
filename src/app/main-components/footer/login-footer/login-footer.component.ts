import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login-footer',
  templateUrl: './login-footer.component.html',
  styleUrls: ['./login-footer.component.scss']
})
export class LoginFooterComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

}
