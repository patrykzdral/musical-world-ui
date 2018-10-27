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
import {AuthenticationService} from '../../../../@core/service/authentication/authentication.service';
import {GoogleService} from '../../../../@core/service/google/google.service';
import {ConcertAddressModel} from '../../map-view/mapAddress.model';
import {SessionService} from '../../../../@core/service/session/session.service';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-concert.component.html',
  styleUrls: ['./new-concert.component.scss']
})
export class NewConcertComponent implements OnInit {
  concert: Concert;
  address: Address;
  eventData: FormGroup;
  instrumentsModelObservable: Observable<Instrument[]>;
  selectedInstruments: Instrument[];
  location: any;
  mapAddress:any;
  concertAddresModel: ConcertAddressModel;
  @ViewChild('search') public searchElement: ElementRef;

  constructor(private _sessionService: SessionService, private _googleService: GoogleService, private _toastr: ToastrService, private router: Router, private ngZone: NgZone,
              private _mapsAPILoader: MapsAPILoader, private _formBuilder: FormBuilder,
              private _instrumentService: InstrumentService, private _authService: AuthenticationService,
              private _concertService: ConcertService) {
  }

  ngOnInit() {

    //this.concertAddresModel = JSON.parse( localStorage.getItem('address') );

      //this.getAddressComponentByPlace(this.location)
    //lat: any = JSON.parse( localStorage.getItem('address') ).latitude;
    //this.mapAddress = localStorage.getItem('address').toString();
    //console.log(this.mapAddress);


    this._authService.checkCredentials();
    this.concert = new Concert();
    this.address = new Address();
    this.selectedInstruments = [];
    this.instrumentsModelObservable = this._instrumentService.findAll();
    this.location= this._sessionService.location;
    if(this.location) {
      this.mapAddress = this.location.formatted_address;
      this.getAddressComponentByPlace(this.location);
      this._sessionService.location=null;
    }
    this.eventData = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['',],
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

  get name(): any {
    return this.eventData.get('name');
  }

  getEventError() {
    return 'You must fill out event name form';
  }

  onSubmit() {

    //const resource = JSON.parse(this.registrationFormGroup.value);
    // user.username=
    this.concert.name = this.eventData.controls['name'].value;
    this.concert.description = this.eventData.controls['description'].value;
    this.concert.dateFrom = this.eventData.controls['dateFrom'].value;
    this.concert.dateTo = this.eventData.controls['dateTo'].value;
    this.concert.ensuredDrive = this.eventData.controls['ensuredDrive'].value;
    this.concert.guaranteedMeal = this.eventData.controls['guaranteedMeal'].value;
    this.concert.numberOfRehearsals = this.eventData.controls['numberOfRehearsals'].value;
    this.concert.address = this.address;
    this.concert.concertInstrumentSlots = this.selectedInstruments;
    this.concert.username = JSON.parse(localStorage.getItem('currentUser')).username;
    console.log(this.concert);
    this._concertService.create(this.concert)
      .pipe(first())
      .subscribe(
        data => {
          //this.loading=true;
          this._toastr.success('Event has been created');
          this.router.navigate(['/']);
        },
        error => {
          this._toastr.error(error);
        });
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
      if (component.types[0] == 'country') {
        country = component['short_name'] + ', ' + component['long_name'];
      }
      if (component.types[0] == 'administrative_area_level_1') {
        city = component['long_name'];
      }
      if (component.types[0] == 'postal_code') {
        postalCode = component['short_name'];
      }
      if (component.types[0] == 'street_number') {
        street_number = component['short_name'];
      }
      if (component.types[0] == 'route') {
        route = component['long_name'];
      }
      if (component.types[0] == 'locality') {
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
