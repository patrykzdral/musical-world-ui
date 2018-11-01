import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SnackBarDeleteComponent} from './snack-bar-delete/snack-bar-delete.component';

@Component({
  selector: 'app-admin-concerts-item',
  templateUrl: './admin-concerts-item.component.html',
  styleUrls: ['./admin-concerts-item.component.scss']
})
export class AdminConcertsItemComponent implements OnInit {

  concertModel: ConcertModel;
  @Output() eventDeletedEmitter = new EventEmitter<any>();
  @Input()
  set concertModelIn(value: ConcertModel) {
    this.concertModel = value;
  }

  constructor(private _router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  deleteEvent() {
    this.snackBar.openFromComponent(SnackBarDeleteComponent, {
      data: this.concertModel.id
    }).onAction().subscribe(() => {
      this.eventDeletedEmitter.emit();
    });
  }

  navigateToDetails() {
    this._router.navigate(['/pages/concerts/show-all/concert', this.concertModel.id]);

  }

  eventDetails() {
    this._router.navigate(['/pages/concerts/admin-concerts/details', this.concertModel.id]);
  }

  updateEvent() {

  }
}
