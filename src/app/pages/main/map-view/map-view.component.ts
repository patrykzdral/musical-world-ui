/// <reference types="@types/googlemaps" />

import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
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
import {GoogleService} from '../../../@core/service/google/google.service';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;

  newEventLocationChosen = false;
  mapTypes = ['hybrid', 'roadmap', 'satellite', 'terrain'];
  mapTypeId = 1;
  concerts: Observable<ConcertModel[]>;
  isFiltered = false;
  currentLocation: string;
  location: any;
  mapAddress: ConcertAddressModel;
  coordinates;
  isTracking;
  newEventMarker = {
    image: '/assets/concert/new_event.png',
    latitude: 51.1078852,
    longitude: 17.0385376,
    formatted_address: '',
    buildingNumber: null
  };

  constructor(private _sessionService: SessionService, private  _mapsAPILoader: MapsAPILoader, private _concertService: ConcertService,
              private _router: Router, public dialog: MatDialog, private http: HttpClient, private _geoLocationService: GoogleService) {
  }

  ngOnInit() {
    this.mapAddress = new ConcertAddressModel();
    this.getEvents();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coordinates = {
          latitude:  +(position.coords.latitude),
          longitude: +(position.coords.longitude)
        };
      });
    }
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe()
  }

  getEvents() {
    console.log(JSON.parse(localStorage.getItem('currentUser')).username);
    if (!this.isFiltered) {
      this.concerts = this._concertService.getAllNotAdminEvents();
    }
  }

  getEventLatitude(event: Concert) {
    if (event.address.latitude) {
      return Number.parseFloat(String(event.address.latitude));
    }
    return null;
  }

  getEventLongitude(event: Concert) {
    if (event.address.longitude) {
      return Number.parseFloat(String(event.address.longitude));
    }
    return null;
  }

  getMarkerImage() {
    return 'assets/concert/normal/marker_overnote.png';
  }

  getCurrentPositionMarker() {
    return 'assets/concert/current_position.png';
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
    // this.getGeoLocation(this.newEventMarker.latitude, this.newEventMarker.longitude)
  }


  getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder;
      const latlng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({'location': latlng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          const rsltAdrComponent = result.address_components;
          const resultLength = rsltAdrComponent.length;
          if (result != null) {
            this.currentLocation = result.formatted_address;
            this.mapAddress.formattedAddress = this.currentLocation;
            this.mapAddress.latitude = lat;
            this.mapAddress.longitude = lng;
            this._sessionService.location = result;   // this.currentLocation=result.address_components;
          } else {
            alert('No address available!');
          }
        }
      });
    }
  }

  getFormattedAddress(concert: Concert) {
    return concert.address.address;
  }

  changeMapType(id) {
    this.mapTypeId = id;
  }

  filterEvents(filteredData) {
    this.isFiltered = false;
    let dateToToSend: Date = null;
    let dateFromToSend: Date = null;
    if (filteredData.dateFrom) {
      dateFromToSend = filteredData.dateFrom.toDateString();
    }
    if (filteredData.dateTo) {
      dateToToSend = filteredData.dateTo.toDateString();
    }

    this.concerts = this._concertService
      .displayFilteredConcerts(filteredData.eventName, filteredData.instruments, dateFromToSend, dateToToSend);
  }


  navigateToEventDetails(id: any) {
    this._router.navigate(['/pages/concerts/show-all/concert', id]);

  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.coordinates = {
          latitude:  +(position.coords.latitude),
          longitude: +(position.coords.longitude)
        };
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
