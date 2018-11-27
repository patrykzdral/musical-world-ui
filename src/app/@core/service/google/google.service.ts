/// <reference types="@types/googlemaps" />

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor() {
  }

  getGeoLocation(lat: number, lng: number) {
    console.log(lat);
    console.log(lng);
    if (!lat || !lng) {
      console.log('empty ');
      return null;
    }


    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder;
      const latlng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({'location': latlng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          const rsltAdrComponent = result.address_components;
          const resultLength = rsltAdrComponent.length;
          if (result != null) {
            return result;
          } else {
            alert('No address available!');
            return null;
          }
        }
      });
    }
  }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        navigator.geolocation.watchPosition((pos: Position) => {
          observer.next(pos);
        }),
          () => {
            console.log('Position is not available');
          },
          {
            enableHighAccuracy: true
          };
      });
  }
}
