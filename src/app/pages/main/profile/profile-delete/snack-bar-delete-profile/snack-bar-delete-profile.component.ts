import {Component, Inject, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {first} from 'rxjs/operators';
import {UserService} from '../../../../../@core/service/user/user.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../../@core/service/authentication/authentication.service';

@Component({
  selector: 'app-snack-bar-delete-profile',
  templateUrl: './snack-bar-delete-profile.component.html',
  styleUrls: ['./snack-bar-delete-profile.component.scss']
})
export class SnackBarDeleteProfileComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private _router: Router, private _toastr: ToastrService, private _userService: UserService,
              @Inject(MAT_SNACK_BAR_DATA) public data: any,
              private dialogRef: MatSnackBarRef<SnackBarDeleteProfileComponent>) {
  }

  ngOnInit() {
  }

  onYesClick() {
    this._userService.deleteByUsername()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);

          this._toastr.success('Deleted profile successfully');
          this._router.navigate(['/pages/auth/login']);
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
