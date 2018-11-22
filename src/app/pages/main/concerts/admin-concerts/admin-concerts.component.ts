import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertModel} from '../../../../@core/model/get-model/concert.model';
import {ConcertService} from '../../../../@core/service/concert/concert.service';
import {ConcertWithPhotoModel} from '../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-admin-concerts',
  templateUrl: './admin-concerts.component.html',
  styleUrls: ['./admin-concerts.component.scss']
})
export class AdminConcertsComponent implements OnInit {
  hasPhoto: boolean = false;
  concertModelObservable: Observable<ConcertWithPhotoModel[]>;

  constructor(private concertsService: ConcertService) { }

  ngOnInit() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents(JSON.parse( localStorage.getItem('currentUser') ).username);
  }

  refreshList() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents(JSON.parse( localStorage.getItem('currentUser') ).username);
  }
}
