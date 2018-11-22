import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertModel} from '../../../../@core/model/get-model/concert.model';
import {ConcertService} from '../../../../@core/service/concert/concert.service';
import {ConcertWithPhotoModel} from '../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-concerts-list',
  templateUrl: './concerts-list.component.html',
  styleUrls: ['./concerts-list.component.scss']
})
export class ConcertsListComponent implements OnInit {

  concertModelObservable: Observable<ConcertWithPhotoModel[]>;

  constructor(private concertsService: ConcertService) { }

  ngOnInit() {
    this.concertModelObservable = this.concertsService.getAllNotAdminEventsWithPhoto(JSON.parse(localStorage.getItem('currentUser')).username);
  }
}
