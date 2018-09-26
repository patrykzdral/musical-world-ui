import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
   this.authService.checkCredentials();
    //this.authService.saveUserInLocalStorage("patrykz13")
  }

}
