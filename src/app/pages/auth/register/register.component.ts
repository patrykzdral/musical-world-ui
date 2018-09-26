import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';
import {RegistrationValidator} from './register.validator';
import {OwnErrorStateMatcher} from './errorStateMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  hide = true;
  matcher = new OwnErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {

    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: this.checkPasswords
    });
    // this.passwordFormGroup = this.formBuilder.group({
    //   password: ['', Validators.required],
    //   repeatPassword: ['', Validators.required]
    // });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup,
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
    });

  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('', [Validators.required, Validators.email]),
    //   password : new FormControl('', [Validators.required]),
    // });
  }

  get username(): any { return this.registrationFormGroup.get('username'); }
  get email(): any { return this.registrationFormGroup.get('email'); }
  get firstName(): any { return this.registrationFormGroup.get('firstName'); }
  get lastName(): any { return this.registrationFormGroup.get('lastName'); }
  get password(): any { return this.passwordFormGroup.get('password'); }
  get repeatPassword(): any { return this.registrationFormGroup.get('passwordFormGroup').get('repeatPassword'); }


  login() {
    // this._authenticationService.obtainAccessToken(this.loginData);
  }
  getUsernameMessage(){
    return this.username.hasError('required') ? 'You must enter username' :
      this.username.hasError('minlength') ? 'Username must be longer than 6 cases': '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('email') ? 'Not a valid email': '';
  }
  getPasswordErrorMessage() {
    return "You must enter password";
    //return this.password.hasError('required') ? 'You must enter a password':'';
  }
  getPasswordRepeatErrorMessage(){
    return 'You must repeat password';
  }
  getPasswordNotEqualsMessage() {
    return "Password don't match"
    //return this.passwordFormGroup.hasError()

  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.repeatPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  onSubmit(){

  }

}
