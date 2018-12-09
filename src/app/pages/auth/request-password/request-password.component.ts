import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UserService} from '../../../@core/service/user/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private _userService: UserService, private _toastrService: ToastrService, private _router: Router) {
  }

  get email(): any {
    return this.resetPasswordForm.get('email');
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //TODO
  onSubmit() {
    this._userService.requestPasswordReset(this.resetPasswordForm.controls['email'].value)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('check your email box', 'Password reset email has been sent');
          this._router.navigate(['/auth/login']);
        },
        error => {
          //console.log(error.toString());
          //this._toastrService.error(error._body);
          this._toastrService.error('Email probably does not exists', 'Check that field once again');
        });
  }
}
