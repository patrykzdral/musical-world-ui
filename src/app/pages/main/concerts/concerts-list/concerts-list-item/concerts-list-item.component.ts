import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-concerts-list-item',
  templateUrl: './concerts-list-item.component.html',
  styleUrls: ['./concerts-list-item.component.scss'],
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
export class ConcertsListItemComponent implements OnInit {
  expanded = false;

  concertModel: ConcertWithPhotoModel;
  imageToShow: any;
  hasPhoto = false;

  constructor(private _router: Router) {
  }

  @Input()
  set concertModelIn(value: ConcertWithPhotoModel) {
    this.concertModel = value;
    console.log(this.concertModel.picture);
    this.isPhoto(this.concertModel.picture);
  }

  @HostListener('click') onClick() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    console.log(this.concertModel.username)
  }

  navigateToDetails() {
    this._router.navigate(['/pages/concerts/show-all/concert', this.concertModel.id]);
  }

  deleteEvent() {

  }

  isPhoto(photo: string) {
    if (photo) {
      this.imageToShow = photo;
      this.hasPhoto = true;
    }

  }

}
