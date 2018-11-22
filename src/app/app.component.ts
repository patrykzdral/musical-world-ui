import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from './@core/service/authentication/authentication.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'musical-world-ui';


  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer, private _authenticationService: AuthenticationService, private translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');

    console.log(this.translate.get('footer.name').toString()+"SDASD");
  }

  ngOnInit(): void {
    let warningTranslation: string = this.translate.instant('Toastr.warnings');
    this.matIconRegistry.addSvgIcon(
      'uk',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/united-kingdom.svg')
    ).addSvgIcon('pl',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/poland.svg'))
      .addSvgIcon('homepage',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/homepage.svg'))
      .addSvgIcon('concert',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/concert.svg'))
      .addSvgIcon('new',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/new.svg'))
      .addSvgIcon('friends',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/friends.svg'))
      .addSvgIcon('profile',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/profile.svg'))
      .addSvgIcon('logout',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/logout.svg'))
      .addSvgIcon('profile_pic',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/header/profile_pic.svg'))
      .addSvgIcon('all',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/all.svg'))
      .addSvgIcon('my',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/my.svg'))
      .addSvgIcon('delete',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/delete.svg'))
      .addSvgIcon('edit',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/edit.svg'))
      .addSvgIcon('show',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/show.svg'))
      .addSvgIcon('picture_change',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/sidenav/picture_change.svg'))
      .addSvgIcon('no_concert_photo',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/concert/no_concert_photo.svg'));

  }

}
