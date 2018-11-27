import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../@core/service/user/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordFormGroup: FormGroup;
  token: any;


  constructor(private _router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private _userService: UserService,
              private _toastrService: ToastrService) {
  }

  ngOnInit() {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      repeatPassword: ['', Validators.required]
    }, {
      validator: this.checkPasswords
    });

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
    console.log(this.token);
  }

  getPasswordErrorMessage() {
    return 'You must enter password';
    // return this.password.hasError('required') ? 'You must enter a password':'';
  }

  getPasswordRepeatErrorMessage() {
    return 'You must repeat password';
  }

  getPasswordNotEqualsMessage() {
    return 'Password don\'t match';
  }

  getPatternPasswordErrorMessage() {
    return 'Password must has at least 6 cases, 1 Uppercase, 1 digit character and 1 special character';

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.repeatPassword.value;
    return pass ===  confirmPass ? null : {notSame: true};

  }

  // TODO TOASTR ERROR PO SUKCESIE
  onSubmit() {
    this._userService.confirmResetPassword(this.passwordFormGroup.controls['password'].value, this.token)
      .pipe(first())
      .subscribe(
        (data) => {
          this._toastrService.success(data);
          this._router.navigate(['/auth/login']);
        },
        (err) => {
          this._toastrService.info(err);
          this._router.navigate(['/auth/login']);
        });

  }

}
