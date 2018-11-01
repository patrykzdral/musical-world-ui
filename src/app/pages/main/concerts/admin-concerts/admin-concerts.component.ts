import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertModel} from '../../../../@core/model/get-model/concert.model';
import {ConcertService} from '../../../../@core/service/concert/concert.service';

@Component({
  selector: 'app-admin-concerts',
  templateUrl: './admin-concerts.component.html',
  styleUrls: ['./admin-concerts.component.scss']
})
export class AdminConcertsComponent implements OnInit {

  concertModelObservable: Observable<ConcertModel[]>;

  constructor(private concertsService: ConcertService) { }

  ngOnInit() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents(JSON.parse( localStorage.getItem('currentUser') ).username);
  }

  refreshList() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents(JSON.parse( localStorage.getItem('currentUser') ).username);
  }
}
