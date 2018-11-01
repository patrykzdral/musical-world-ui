import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatDialogRef, MatSnackBarRef} from '@angular/material';
import {ConcertService} from '../../../../../../@core/service/concert/concert.service';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-snack-bar-delete',
  templateUrl: './snack-bar-delete.component.html',
  styleUrls: ['./snack-bar-delete.component.scss']
})
export class SnackBarDeleteComponent implements OnInit {

  constructor(private _toastr: ToastrService, private _concertService: ConcertService,
              @Inject(MAT_SNACK_BAR_DATA) public data: any,
              private dialogRef: MatSnackBarRef<SnackBarDeleteComponent>) { }

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
