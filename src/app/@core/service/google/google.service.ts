/// <reference types="@types/googlemaps" />

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor() { }

  getGeoLocation(lat: number, lng: number) {
    console.log(lat);
    console.log(lng);
    if (!lat || !lng) {
      console.log("empty ");
      return null;
    }


    if (navigator.geolocation) {
      let geocoder = new google.maps.Geocoder;
      let latlng = new google.maps.LatLng(lat, lng);

      geocoder.geocode({'location': latlng}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          let rsltAdrComponent = result.address_components;
          let resultLength = rsltAdrComponent.length;
          if (result != null) {
            return result;
          } else {
            alert("No address available!");
            return null;
          }
        }
      });
    }
  }
}
