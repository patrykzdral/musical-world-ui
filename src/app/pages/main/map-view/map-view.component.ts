import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
//import {google} from "@agm/core/services/google-maps-types";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private _authService: AuthenticationService) {
  }

  ngOnInit() {
   this._authService.checkCredentials();
    //this.authService.saveUserInLocalStorage("patrykz13")
  }

}
