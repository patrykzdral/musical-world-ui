import {Component, Input, OnInit} from '@angular/core';
import {ConcertApplicationChangeModel} from '../../../../../../@core/model/concert-application-change.model';
import {ConcertApplicationService} from '../../../../../../@core/service/concert-application/concert-application.service';
import {ConcertApplicationExamineModel} from '../../../../../../@core/model/concert-application-examine.model';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-concert-application',
  templateUrl: './admin-concert-application.component.html',
  styleUrls: ['./admin-concert-application.component.scss']
})
export class AdminConcertApplicationComponent implements OnInit {

  concertApplication: ConcertApplicationChangeModel;

  constructor(private _concertApplicationService: ConcertApplicationService, private _toastrService: ToastrService,
              private _router: Router) {
  }

  @Input()
  set concertApplicationInput(value: ConcertApplicationChangeModel) {
    this.concertApplication = value;
  }

  ngOnInit() {
  }

  navigateToUserDetails() {
    this._router.navigate(['/pages/profile/user-profile-show/', this.concertApplication.user.username]);

  }

  // TODO REFRESH PAGE
  reject() {
    this._concertApplicationService.examineConcertApplication(new ConcertApplicationExamineModel(this.concertApplication.id, false))
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('Application has been accepted');
        },
        error => {
          this._toastrService.error(error);
        });
  }

  accept() {
    this._concertApplicationService.examineConcertApplication(new ConcertApplicationExamineModel(this.concertApplication.id, true))
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('Application has been rejected');
        },
        error => {
          this._toastrService.error(error);
        });
  }
}
