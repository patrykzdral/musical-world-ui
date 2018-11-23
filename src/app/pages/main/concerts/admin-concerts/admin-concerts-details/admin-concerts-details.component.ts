import {Component, OnInit} from '@angular/core';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';
import {ConcertApplicationModel} from '../../../../../@core/model/concert-application.model';
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
    this.route.params.subscribe(params => {
      this.concertApplications = this._concertApplicationService.getConcertApplications(params['id']);
    });
    // console.log("onINIT");
    // this.route.data.subscribe((data: { concertApplicationModels: ConcertApplicationModel[] }) => {
    //     if (data.concertApplicationModels) {
    //       this.concertApplications = data.concertApplicationModels;
    //
    //     } else {
    //       this.router.navigate(['/pages/concerts/show-all/']);
    //
    //     }
    //   }
    // );
  }

}