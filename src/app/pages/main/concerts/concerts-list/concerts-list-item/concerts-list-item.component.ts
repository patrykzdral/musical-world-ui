import {Component, Input, OnInit} from '@angular/core';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-concerts-list-item',
  templateUrl: './concerts-list-item.component.html',
  styleUrls: ['./concerts-list-item.component.scss']
})
export class ConcertsListItemComponent implements OnInit {

  concertModel: ConcertModel;

  @Input()
  set concertModelIn(value: ConcertModel) {
    this.concertModel = value;
  }
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToDetails() {
    this._router.navigate(['/pages/concerts/show-all/concert', this.concertModel.id]);

  }
}
