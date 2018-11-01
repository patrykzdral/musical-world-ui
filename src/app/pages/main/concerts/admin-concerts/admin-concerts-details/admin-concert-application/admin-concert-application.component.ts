import {Component, Input, OnInit} from '@angular/core';
import {ConcertModel} from '../../../../../../@core/model/get-model/concert.model';
import {ConcertApplicationModel} from '../../../../../../@core/model/concert-application.model';

@Component({
  selector: 'app-admin-concert-application',
  templateUrl: './admin-concert-application.component.html',
  styleUrls: ['./admin-concert-application.component.scss']
})
export class AdminConcertApplicationComponent implements OnInit {

  concertApplication: ConcertApplicationModel;

  @Input()
  set concertModelIn(value: ConcertApplicationModel) {
    this.concertApplication = value;
  }
  constructor() { }

  ngOnInit() {
  }

  navigateToUserDetails() {

  }
  reject(){

  }
  accept(){

  }
}
