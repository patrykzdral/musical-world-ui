import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SnackBarDeleteConcertComponent} from './snack-bar-delete-concert/snack-bar-delete-concert.component';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-admin-concerts-item',
  templateUrl: './admin-concerts-item.component.html',
  styleUrls: ['./admin-concerts-item.component.scss']
})
export class AdminConcertsItemComponent implements OnInit {

  concertModel: ConcertWithPhotoModel;
  imageToShow:any;
  hasPhoto: boolean = false;
  @Output() eventDeletedEmitter = new EventEmitter<any>();
  @Input()
  set concertModelIn(value: ConcertWithPhotoModel) {
    console.log(value);
    this.concertModel = value;
    this.isPhoto(this.concertModel.picture);

  }

  constructor(private _router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  deleteEvent() {
    this.snackBar.openFromComponent(SnackBarDeleteConcertComponent, {
      data: this.concertModel.id
    }).onAction().subscribe(() => {
      this.eventDeletedEmitter.emit();
    });
  }

  navigateToDetails() {
    this._router.navigate(['/pages/concerts/show-all/concert', this.concertModel.id]);

  }

  eventDetails() {
    console.log(this.concertModel.id);
    this._router.navigate(['/pages/concerts/admin-concerts/details', this.concertModel.id]);
  }

  updateEvent() {

  }

  isPhoto(photo : string ) {
    if(photo){
      this.imageToShow= photo;
      this.hasPhoto = true;
    }

  }
}
