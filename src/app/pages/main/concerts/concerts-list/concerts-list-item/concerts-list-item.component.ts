import {Component, Input, OnInit} from '@angular/core';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {Router} from '@angular/router';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-concerts-list-item',
  templateUrl: './concerts-list-item.component.html',
  styleUrls: ['./concerts-list-item.component.scss']
})
export class ConcertsListItemComponent implements OnInit {

  concertModel: ConcertWithPhotoModel;
  imageToShow:any;
  hasPhoto: boolean = false;
  @Input()
  set concertModelIn(value: ConcertWithPhotoModel) {
    this.concertModel = value;
    console.log(this.concertModel.picture);
    this.isPhoto(this.concertModel.picture);
  }
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToDetails() {
    this._router.navigate(['/pages/concerts/show-all/concert', this.concertModel.id]);
  }

  deleteEvent() {

  }
  isPhoto(photo : string ) {
    if(photo){
      this.imageToShow= photo;
      this.hasPhoto = true;
    }

  }

}
