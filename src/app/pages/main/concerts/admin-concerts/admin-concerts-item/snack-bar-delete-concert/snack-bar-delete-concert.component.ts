import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {ConcertService} from '../../../../../../@core/service/concert/concert.service';

@Component({
  selector: 'app-snack-bar-delete',
  templateUrl: './snack-bar-delete-concert.component.html',
  styleUrls: ['./snack-bar-delete-concert.component.scss']
})
export class SnackBarDeleteConcertComponent implements OnInit {

  constructor(private _toastr: ToastrService, private _concertService: ConcertService,
              @Inject(MAT_SNACK_BAR_DATA) public data: any,
              private dialogRef: MatSnackBarRef<SnackBarDeleteConcertComponent>) {
  }

  ngOnInit() {
  }

  onYesClick() {
    this._concertService.delete(this.data)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this._toastr.success('Deleted event successfully');
          this.dialogRef.dismissWithAction();

        }
        ,
        err => this._toastr.error(err)
      );
  }

  onNoClick() {
    this.dialogRef.dismiss();
  }

}
