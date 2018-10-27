import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
import {AdvancedFilterDialogComponent} from './concerts-filter/advanced-filter-dialog/advanced-filter-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {Concert} from '../../../@core/model/concert.model';
import {HttpClient} from '@angular/common/http';
import {ConcertService} from '../../../@core/service/concert/concert.service';
import {Observable} from 'rxjs';
import {MapsAPILoader} from '@agm/core';
import {ConcertAddressModel} from './mapAddress.model';
import {SessionService} from '../../../@core/service/session/session.service';
import {ConcertModel} from '../../../@core/model/get-model/concert.model';
import {} from '@types/googlemaps';

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
  concerts: Observable<ConcertModel[]>;

  arrows = ['/assets/map_view/arrow_up_white.png', '/assets/map_view/arrow_up_black.png'];
  isEventsListOnScreen: boolean;
  imageNumber = 0;
  arrowBottomMarginWithoutList: string;
  arrowBottomMarginWithList: string;
  currentLocation: string;
  location: any;
  mapAddress: ConcertAddressModel;

  newEventMarker = {
    image: '/assets/concert/new_event.png',
    latitude: 51.1078852,
    longitude: 17.0385376,
    formatted_address: '',
    buildingNumber: null
  };

  constructor(private _sessionService: SessionService, private  _mapsAPILoader: MapsAPILoader, private _concertService: ConcertService, private _router: Router,
              private _authService: AuthenticationService, public dialog: MatDialog, private http: HttpClient) {
  }

  ngOnInit() {
    this.mapAddress= new ConcertAddressModel();
    this._authService.checkCredentials();
    this.getEvents();

    if (window.innerWidth < 320) {
      this.arrowBottomMarginWithList = '140px';
      this.arrowBottomMarginWithoutList = '60px';
    }
    else if (window.innerWidth < 451) {
      this.arrowBottomMarginWithList = '230px';
      this.arrowBottomMarginWithoutList = '70px';
    }
    else {
      this.arrowBottomMarginWithList = '290px';
      this.arrowBottomMarginWithoutList = '50px';
    }
    //this.eventService.clearAddressComponents();
  }





  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 320) {
      this.arrowBottomMarginWithList = '140px';
      this.arrowBottomMarginWithoutList = '60px';
    }
    else if (event.target.innerWidth < 451) {
      this.arrowBottomMarginWithList = '230px';
      this.arrowBottomMarginWithoutList = '70px';
    }
    else {
      this.arrowBottomMarginWithList = '290px';
      this.arrowBottomMarginWithoutList = '50px';
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
      this.arrows = ['/assets/map_view/arrow_down_white.png', '/assets/map_view/arrow_down_black.png'];
    else
      this.arrows = ['/assets/map_view/arrow_up_white.png', '/assets/map_view/arrow_up_black.png'];
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
    if (event.address.latitude)
      return Number.parseFloat(String(event.address.latitude));
    return null;
  }

  getEventLongitude(event: Concert) {
    if (event.address.longitude)
      return Number.parseFloat(String(event.address.longitude));
    return null;
  }

  getMarkerImage(event: Concert) {
    return 'assets/concert/normal/marker_overnotev2.png';
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
    localStorage.setItem('address', JSON.stringify(this.mapAddress));
    this._router.navigate(['/pages/concerts/create-new']);
  }

  onChoseLocation(event) {
    this.newEventMarker.latitude = event.coords.lat;
    this.newEventMarker.longitude = event.coords.lng;
    this.newEventLocationChosen = true;
    console.log(this.currentLocation);
    this.getGeoLocation(this.newEventMarker.latitude, this.newEventMarker.longitude);
    //this.getGeoLocation(this.newEventMarker.latitude, this.newEventMarker.longitude)
  }


  getGeoLocation(lat: number, lng: number) {
    console.log(lat);
    console.log(lng);

    if (navigator.geolocation) {
      let geocoder = new google.maps.Geocoder;
      let latlng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({'location': latlng}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          let rsltAdrComponent = result.address_components;
          let resultLength = rsltAdrComponent.length;
          if (result != null) {
            this.currentLocation=result.formatted_address;
            this.mapAddress.formattedAddress=this.currentLocation;
            this.mapAddress.latitude=lat;
            this.mapAddress.longitude=lng;
            this._sessionService.location=result;   //this.currentLocation=result.address_components;
          } else {
            alert("No address available!");
          }
        }
      });
    }
  }

  getFormattedAddress(concert: Concert) {
    return concert.address.address;
  }

  changeMapType(id) {
    this.mapTypeId=id;
  }
}
