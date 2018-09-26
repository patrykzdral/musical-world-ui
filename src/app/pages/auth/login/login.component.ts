import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Validators.email
  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  });
  hide = true;
  constructor(
    private route: ActivatedRoute,
    private _authenticationService: AuthenticationService, private translate: TranslateService
  ,private router: Router) {}

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('', [Validators.required, Validators.email]),
    //   password : new FormControl('', [Validators.required]),
    // });
  }

  get username(): any { return this.loginForm.get('username'); }
  get password(): any { return this.loginForm.get('password'); }

  login() {
    // this._authenticationService.obtainAccessToken(this.loginData);
  }

  getEmailErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter an username' :'';
      // this.loginForm.get('username').hasError('email') ? 'Not a valid email' :
      //   '';
  }
  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a password':'';
  }

  onSubmit(){
    console.log(this.loginForm.value);  // {first: 'Nancy', last: 'Drew'}
    this._authenticationService.obtainAccessToken(this.loginForm.value);
  }
}
