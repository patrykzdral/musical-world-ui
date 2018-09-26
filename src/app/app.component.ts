import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from './@core/service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'musical-world-ui';

  constructor(private _authenticationService: AuthenticationService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    //  console.log(this.translate.get('Title'));
  }

  ngOnInit(): void {
    let warningTranslation:string = this.translate.instant('Toastr.warnings');
    console.log("TEST "+warningTranslation);
  }
}
