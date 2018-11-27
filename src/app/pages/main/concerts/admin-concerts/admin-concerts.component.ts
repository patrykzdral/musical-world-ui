import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ConcertService} from '../../../../@core/service/concert/concert.service';
import {ConcertWithPhotoModel} from '../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-admin-concerts',
  templateUrl: './admin-concerts.component.html',
  styleUrls: ['./admin-concerts.component.scss']
})
export class AdminConcertsComponent implements OnInit {
  hasPhoto = false;
  concertModelObservable: Observable<ConcertWithPhotoModel[]>;
  searchText: string;

  constructor(private concertsService: ConcertService) {
  }

  ngOnInit() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents();
  }

  refreshList() {
    this.concertModelObservable = this.concertsService.getAllAdminEvents();
  }
}
