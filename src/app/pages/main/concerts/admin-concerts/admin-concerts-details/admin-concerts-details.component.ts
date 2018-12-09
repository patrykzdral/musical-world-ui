import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';
import {Observable} from 'rxjs';
import {ConcertApplicationChangeModel} from '../../../../../@core/model/concert-application-change.model';

@Component({
  selector: 'app-admin-concerts-details',
  templateUrl: './admin-concerts-details.component.html',
  styleUrls: ['./admin-concerts-details.component.scss']
})
export class AdminConcertsDetailsComponent implements OnInit {

  concertApplications: Observable<ConcertApplicationChangeModel[]>;

  constructor(private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private _concertApplicationService: ConcertApplicationService) {
  }

  ngOnInit() {
    this.refresh();
  }
  refresh(){
    this.route.params.subscribe(params => {
      this.concertApplications = this._concertApplicationService.getConcertApplications(params['id']);
    });
  }
}
