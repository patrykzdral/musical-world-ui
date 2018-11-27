import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SnackBarDeleteConcertComponent} from './snack-bar-delete-concert/snack-bar-delete-concert.component';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin-concerts-item',
  templateUrl: './admin-concerts-item.component.html',
  styleUrls: ['./admin-concerts-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class AdminConcertsItemComponent implements OnInit {
  expanded = false;
  concertModel: ConcertWithPhotoModel;
  imageToShow: any;
  hasPhoto = false;
  @Output() eventDeletedEmitter = new EventEmitter<any>();

  constructor(private _router: Router, public snackBar: MatSnackBar) {
  }

  @Input()
  set concertModelIn(value: ConcertWithPhotoModel) {
    console.log(value);
    this.concertModel = value;
    this.isPhoto(this.concertModel.picture);

  }

  @HostListener('click') onClick() {
    this.expanded = !this.expanded;
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
    this._router.navigate(['/pages/concerts/admin-concerts/applications', this.concertModel.id]);
  }

  updateEvent() {
    this._router.navigate(['/pages/concerts/admin-concerts/update', this.concertModel.id]);
  }

  isPhoto(photo: string) {
    if (photo) {
      this.imageToShow = photo;
      this.hasPhoto = true;
    }

  }
}
