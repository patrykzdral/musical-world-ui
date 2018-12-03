/// <reference types="@types/googlemaps" />

import {Component, ElementRef, HostListener, NgZone, OnInit, ViewChild} from '@angular/core';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConcertService} from '../../../../../@core/service/concert/concert.service';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Address} from '../../../../../@core/model/address.model';
import {MapsAPILoader} from '@agm/core';
import {AgGridNg2} from 'ag-grid-angular';
import {ConcertInstrumentSlotModel} from '../../../../../@core/model/get-model/concert-instrument-slot.model';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';

@Component({
  selector: 'app-admin-conert-info-update',
  templateUrl: './admin-concert-info-update.component.html',
  styleUrls: ['./admin-concert-info-update.component.scss']
})
export class AdminConcertInfoUpdateComponent implements OnInit {

  concert: ConcertWithPhotoModel;
  imageToShow: any;
  buttonDisabled: boolean;
  hasPhoto = false;
  concertData: FormGroup;
  address: Address = new Address();
  location: any;
  addr: any;
  rowData: any;
  columnDefs = [
    {headerName: 'Instrument', field: 'instrument.name', checkboxSelection: true},
    {headerName: 'is taken', field: 'taken'},
    {headerName: 'by who i taken', field: 'user.username'},
  ];
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  constructor(private _route: ActivatedRoute, private _router: Router, private _formBuilder: FormBuilder,
              private _concertService: ConcertService, private _toastrService: ToastrService,
              private _mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
              private _concertApplicationService: ConcertApplicationService) {
  }

  get name(): any {
    return this.concertData.get('name');
  }

  get description(): any {
    return this.concertData.get('description');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.agGrid.api.sizeColumnsToFit();
  }

  ngOnInit() {
    this.concertData = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.maxLength(255)]],
      dateFrom: ['', ],
      dateTo: ['', ],
      address: ['', ],
      guaranteedMeal: [false],
      ensuredDrive: [false],
      numberOfRehearsals: [0, ],
    });
    this._route.data.subscribe((data: { concert: ConcertWithPhotoModel }) => {
      if (data.concert) {
        this.concert = data.concert;
        if (this.concert.picture) {
          this.imageToShow = this.concert.picture;
          this.hasPhoto = true;
        }
        if (this.concert.address) {
          this.addr = this.concert.address.address;
        }
        this.rowData = this.concert.concertInstrumentSlots;
      } else {
        this._router.navigate(['/pages/concerts/show-all/']);
      }
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
    )
  }

  getDescriptionError() {
    return this.description.hasError('maxlength') ? 'Max length is 255 cases' : '';
  }

  getEventError() {
    return this.name.hasError('required') ? 'You must fill out event name form' :
      this.name.hasError('maxlength') ? 'Max length is 30 cases' :
        this.name.hasError('minlength') ? 'Min length is 2 cases' : '';
  }

  hasConcertPhoto() {
    return this.hasPhoto;
  }

  fileAdded() {

  }

  update() {
    this.concert.address = this.address;
    console.log(this.concert.address);
    this._concertService.update(this.concert)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.info('Profile has been updated! ');
        },
        error => {
          this._toastrService.error(error);
        });
  }

  onGridReady(params) {
    console.log('read');
    this.agGrid.api.sizeColumnsToFit();
  }

  isAnySelected() {
    const selectedNode = this.agGrid.api.getSelectedNodes().length;
    if (selectedNode === 0) {
      this.buttonDisabled = true;
    }
    if (selectedNode !== 0) {
      this.buttonDisabled = false;
    }
  }

  deleteSelected() {
    let concertInstrumentSlots: any[];
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    concertInstrumentSlots = selectedData as ConcertInstrumentSlotModel[];
    this._concertService.deleteConcertInstrumentSlots(concertInstrumentSlots)
      .pipe(first())
      .subscribe(
        data => {
        },
        error => {
          this._toastrService.error(error);
        },
        () => {
          this.refresh();
          this._toastrService.success('Application has been deleted successfully!');
        });
  }

  private getAddressComponentByPlace(place) {
    const components = place.address_components;
    const formattedAddress = place.formatted_address;
    let country = null;
    let city = null;
    let postalCode = null;
    let street_number = null;
    let route = null;
    let locality = null;

    let i = 0, component;
    for (; component = components[i]; i++) {
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
    this.address.address = formattedAddress;
    this.address.country = country;
    this.address.postalCode = postalCode;
    this.address.city = locality;
    this.address.street = route;
    this.address.latitude = place.geometry.location.lat();
    this.address.longitude = place.geometry.location.lng();
  }

  refresh(): void {
    window.location.reload();
  }
}
