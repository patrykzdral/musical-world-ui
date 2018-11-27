import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatProgressButtonOptions} from 'mat-progress-buttons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  hide = true;
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Spinner Button',
    spinnerSize: 100,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate'
  };

  constructor(
    private route: ActivatedRoute,
    private _authenticationService: AuthenticationService, private translate: TranslateService
    , private _router: Router) {
  }

  get username(): any {
    return this.loginForm.get('username');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('', [Validators.required, Validators.email]),
    //   password : new FormControl('', [Validators.required]),
    // });
  }

  login() {
    // this._authenticationService.obtainAccessToken(this.loginData);
  }

  getEmailErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter an username' : '';
    // this.loginForm.get('username').hasError('email') ? 'Not a valid email' :
    //   '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a password' : '';
  }

  onSubmit() {
    this.spinnerButtonOptions.active = true;
    console.log(this.loginForm.value);  // {first: 'Nancy', last: 'Drew'}

    this._authenticationService.obtainAccessToken(this.loginForm.value);
    this.spinnerButtonOptions.active = false;
    // this.spinnerButtonOptions.active = true;
    // setTimeout(() => {
    //   this.spinnerButtonOptions.active = false;
    // }, 3500)
  }
}
