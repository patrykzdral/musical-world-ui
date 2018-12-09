/// <reference types="@types/googlemaps" />

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Instrument} from '../../../../@core/model/intrument.model';
import {Observable} from 'rxjs';
import {InstrumentService} from '../../../../@core/service/instrument/instrument.service';
import {MapsAPILoader} from '@agm/core';
import {first} from 'rxjs/operators';
import {Concert} from '../../../../@core/model/concert.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ConcertService} from '../../../../@core/service/concert/concert.service';
import {Address} from '../../../../@core/model/address.model';
import {GoogleService} from '../../../../@core/service/google/google.service';
import {ConcertAddressModel} from '../../map-view/mapAddress.model';
import {SessionService} from '../../../../@core/service/session/session.service';
import {PictureService} from '../../../../@core/service/picture/picture.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-concert.component.html',
  styleUrls: ['./new-concert.component.scss']
})
export class NewConcertComponent implements OnInit {
  currentFileUpload: File;
  concert: Concert;
  address: Address;
  eventData: FormGroup;
  instrumentsModelObservable: Observable<Instrument[]>;
  selectedInstruments: Instrument[];
  location: any;
  mapAddress: any;
  concertAddressModel: ConcertAddressModel;
  message: any;
  @ViewChild('search') public searchElement: ElementRef;

  constructor(private _sessionService: SessionService, private _googleService: GoogleService, private _toastr: ToastrService
    , private router: Router, private ngZone: NgZone, private _mapsAPILoader: MapsAPILoader, private _formBuilder: FormBuilder,
              private _instrumentService: InstrumentService, private _concertService: ConcertService, private _pictureService: PictureService) {
  }

  get name(): any {
    return this.eventData.get('name');
  }

  get description(): any {
    return this.eventData.get('description');
  }

  ngOnInit() {
    this.concert = new Concert();
    this.address = new Address();
    this.selectedInstruments = [];
    this.instrumentsModelObservable = this._instrumentService.findAll();
    this.location = this._sessionService.location;
    if (this.location) {
      this.mapAddress = this.location.formatted_address;
      this.getAddressComponentByPlace(this.location);
      this._sessionService.location = null;
    }
    this.eventData = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.minLength(1), Validators.maxLength(2000)]],
      dateFrom: ['',],
      dateTo: ['',],
      address: ['',],
      guaranteedMeal: [false],
      ensuredDrive: [false],
      numberOfRehearsals: [0,],
    });

    this._mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types: ['address']});

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.getAddressComponentByPlace(place);
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
  }

  getDescriptionError() {
    return this.description.hasError('maxlength') ? 'Max length is 2000 cases' : '';
  }

  getEventError() {
    return this.name.hasError('required') ? 'You must fill out event name form' :
      this.name.hasError('maxlength') ? 'Max length is 30 cases' :
        this.name.hasError('minlength') ? 'Min length is 2 cases' : '';
  }

  onSubmit() {
    this.concert.name = this.eventData.controls['name'].value;
    this.concert.description = this.eventData.controls['description'].value;
    console.log(this.eventData.controls['dateFrom'].value);
    this.concert.dateFrom = this.eventData.controls['dateFrom'].value;
    this.concert.dateTo = this.eventData.controls['dateTo'].value;
    this.concert.ensuredDrive = this.eventData.controls['ensuredDrive'].value;
    this.concert.guaranteedMeal = this.eventData.controls['guaranteedMeal'].value;
    this.concert.numberOfRehearsals = this.eventData.controls['numberOfRehearsals'].value;
    this.concert.address = this.address;
    this.concert.concertInstrumentSlots = this.selectedInstruments;
    console.log(this.concert);
    if (this.currentFileUpload) {
      this.message = this._pictureService.pushFileToStorage(this.currentFileUpload)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this._toastr.info('Toastr.success.file_uploaded');
            this.concert.pictureName = data;
          },
          error => {
            this._toastr.error('Toastr.error.file_upload_error');
          });

      setTimeout(() => {
        this._concertService.create(this.concert)
          .pipe(first())
          .subscribe(
            data => {
              this._toastr.success('Toastr.success.event_created');
              this.router.navigate(['/']);
            },
            error => {
              this._toastr.error('Toastr.error.something_wrong');
            });

      }, 1000);
    }
  }

  fileAdded(picture: File) {
    console.log(picture);
    this.currentFileUpload = picture;
  }

  private getAddressComponentByPlace(place) {
    const components = place.address_components;
    let country = null;
    let city = null;
    let postalCode = null;
    let street_number = null;
    let route = null;
    let locality = null;

    let i = 0, component;
    for (; component = components[i]; i++) {
      console.log(component);
      if (component.types[0] === 'country') {
        country = component['short_name'] + ', ' + component['long_name'];
      }
      if (component.types[0] === 'administrative_area_level_1') {
        city = component['long_name'];
      }
      if (component.types[0] === 'postal_code') {
        postalCode = component['short_name'];
      }
      if (component.types[0] === 'street_number') {
        street_number = component['short_name'];
      }
      if (component.types[0] === 'route') {
        route = component['long_name'];
      }
      if (component.types[0] === 'locality') {
        locality = component['short_name'];
      }
    }
    this.address.address = place.formatted_address;
    this.address.country = country;
    this.address.postalCode = postalCode;
    this.address.city = locality;
    this.address.street = route;
    this.address.latitude = place.geometry.location.lat();
    this.address.longitude = place.geometry.location.lng();
  }


}

