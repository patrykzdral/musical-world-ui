import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
import {AdvancedFilterDialogComponent} from './concerts-filter/advanced-filter-dialog/advanced-filter-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {Concert} from '../../../@core/model/concert.model';
import {HttpClient} from '@angular/common/http';
import {ConcertService} from '../../../@core/service/concert/concert.service';
import {Observable} from 'rxjs';
//import {google} from "@agm/core/services/google-maps-types";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  startLatitude = 51.1078852;
  startLongitude = 17.0385376;
  newEventLocationChosen = false;
  mapTypes = ['hybrid', 'roadmap', 'satellite', 'terrain'];
  mapTypeId = 0;
  concerts: Observable<Concert[]>;
  arrows = ["/assets/map_view/arrow_up_white.png", "/assets/map_view/arrow_up_black.png"];
  isEventsListOnScreen: boolean;
  imageNumber = 0;
  arrowBottomMarginWithoutList: string;
  arrowBottomMarginWithList: string;

  result: any;
  newEventMarker = {
    image: '/assets/markers/new_event.png',
    latitude: 51.1078852,
    longitude: 17.0385376,
    formatted_address: "",
    buildingNumber: null
  };

  constructor(private _concertService: ConcertService, private _router: Router,private _authService: AuthenticationService, public dialog: MatDialog, private http: HttpClient) {
  }
  ngOnInit() {
    this._authService.checkCredentials();
    this.getEvents();

    if (window.innerWidth < 320) {
      this.arrowBottomMarginWithList = "140px";
      this.arrowBottomMarginWithoutList = "60px";
    }
    else if (window.innerWidth < 451) {
      this.arrowBottomMarginWithList = "230px";
      this.arrowBottomMarginWithoutList = "70px";
    }
    else {
      this.arrowBottomMarginWithList = "290px";
      this.arrowBottomMarginWithoutList = "50px";
    }
    //this.eventService.clearAddressComponents();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdvancedFilterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  getGeoLocation(lat: number, lng: number) {
    const promise = new Promise((resolve) => {
      this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='
        + String(lat) + ',' + String(lng) + '&key=AIzaSyBEmx5P3vl4ox4OU6nPgwTbU9k-_0Zm6Lo'
      ).toPromise().then(res => {
          resolve(res.valueOf());
        },
        (err) => {
          console.log(err);
        });
    });

    // promise.then((value) => {
    //   this.result = JSON.parse(JSON.stringify(value));
    //   console.log(this.result['results'][0]['formatted_address']);
    //   this.newEventMarker.formatted_address = this.result['results'][0]['formatted_address'];
    //
    //   for (let i = 0; i < this.result['results'][0]['address_components'].length; i++) {
    //     let addressType = this.result['results'][0]['address_components'][i]['types'][0];
    //
    //
    //     switch (addressType) {
    //       case "street_number": {
    //         if (this.eventService.addressComponents.streetWithHouseNumber != "") {
    //           this.eventService.addressComponents.streetWithHouseNumber
    //             += " " + this.result['results'][0]['address_components'][i]["long_name"];
    //         }
    //         else{
    //           this.eventService.addressComponents.streetWithHouseNumber = this.result['results'][0]['address_components'][i]["long_name"];
    //         }
    //         break;
    //       }
    //
    //       case "route": {
    //         if (this.eventService.addressComponents.streetWithHouseNumber != "") {
    //           let streetNr = this.eventService.addressComponents.streetWithHouseNumber;
    //           this.eventService.addressComponents.streetWithHouseNumber
    //             = this.result['results'][0]['address_components'][i]["long_name"] + " " + streetNr;
    //         }
    //         else{
    //           this.eventService.addressComponents.streetWithHouseNumber = this.result['results'][0]['address_components'][i]["long_name"];
    //         }
    //         break;
    //       }
    //
    //       case "locality": {
    //         this.eventService.addressComponents.city
    //           = this.result['results'][0]['address_components'][i]["long_name"];
    //         break;
    //       }
    //
    //       case "country": {
    //         this.eventService.addressComponents.country
    //           = this.result['results'][0]['address_components'][i]["long_name"];
    //         break;
    //       }
    //
    //       case "postal_code": {
    //         this.eventService.addressComponents.postalCode
    //           = this.result['results'][0]['address_components'][i]["long_name"];
    //         break;
    //       }
    //
    //       default: {
    //         break;
    //       }
    //     }
    //   }
    // });
  }



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 320) {
      this.arrowBottomMarginWithList = "140px";
      this.arrowBottomMarginWithoutList = "60px";
    }
    else if (event.target.innerWidth < 451) {
      this.arrowBottomMarginWithList = "230px";
      this.arrowBottomMarginWithoutList = "70px";
    }
    else {
      this.arrowBottomMarginWithList = "290px";
      this.arrowBottomMarginWithoutList = "50px";
    }
  }

  changeMapTypeId() {
    let currentMapTypeId = this.mapTypeId;
    currentMapTypeId++;
    if (currentMapTypeId > 3)
      currentMapTypeId = 0;
    this.mapTypeId = currentMapTypeId;

    if (this.mapTypeId == 0 || this.mapTypeId == 2)
      this.imageNumber = 0;
    else
      this.imageNumber = 1;
  }

  displayEventsListOnScreen() {
    this.isEventsListOnScreen = !this.isEventsListOnScreen;

    if (this.isEventsListOnScreen == true)
      this.arrows = ["/assets/map_view/arrow_down_white.png", "/assets/map_view/arrow_down_black.png"];
    else
      this.arrows = ["/assets/map_view/arrow_up_white.png", "/assets/map_view/arrow_up_black.png"];
  }

  getEvents() {
      this.concerts = this._concertService.getAll();
    // if (this.eventService.filteredEvents != null)
    //   this.concerts = this.eventService.filteredEvents;
    // else
    //   this.eventService.getEventsInfoWithoutEnded().subscribe(data => {
    //     this.concerts = data;
    //   });
    //   this._concertService.getAll().subscribe(data => {
    //     this.concerts = data;
    //   });
  }

  getEventLatitude(event: Concert) {
    if(event.address.latitude)
      return Number.parseFloat(String(event.address.latitude));
    return null;
  }

  getEventLongitude(event: Concert) {
    if(event.address.longitude)
      return Number.parseFloat(String(event.address.longitude));
    return null;  }

  getMarkerImage(event: Concert) {
    return 'assets/concert/normal/marker_overnote.png';
    // if (event.eventStatus == "available" && event.numberOfParticipants == 0)
    //   return 'assets/img/markers/transparent_background/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "in_the_middle" && event.numberOfParticipants == 0)
    //   return 'assets/img/markers/transparent_background_with_light/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "available" && event.numberOfParticipants > 0 && event.numberOfParticipants < 3)
    //   return 'assets/img/markers/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "in_the_middle" && event.numberOfParticipants > 0 && event.numberOfParticipants < 3)
    //   return 'assets/img/markers/light/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "available" && event.numberOfParticipants < 10)
    //   return 'assets/img/markers/other_sizes/bigger/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "in_the_middle" && event.numberOfParticipants < 10)
    //   return 'assets/img/markers/other_sizes/bigger_with_light/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "available")
    //   return 'assets/img/markers/other_sizes/biggest/marker_' + event.thematicsMarkerImagePath;
    // else if (event.eventStatus == "in_the_middle")
    //   return 'assets/img/markers/other_sizes/biggest_with_light/marker_' + event.thematicsMarkerImagePath;
  }

  navigateToEvents() {
    this._router.navigateByUrl('/concerts');
  }

  navigateToNewEvent() {
    this._router.navigateByUrl('/concerts/new');
  }

  onChoseLocation(event) {
    this.newEventMarker.latitude = event.coords.lat;
    this.newEventMarker.longitude = event.coords.lng;
    this.newEventLocationChosen = true;
    this.getGeoLocation(this.newEventMarker.latitude, this.newEventMarker.longitude)
  }

  getFormattedAddress(concert: Concert) {
    return concert.address.address;
  }


}
