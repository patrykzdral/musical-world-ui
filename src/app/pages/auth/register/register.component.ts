import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OwnErrorStateMatcher} from './errorStateMatcher';
import {UserService} from '../../../@core/service/user/user.service';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  additionalFieldsFormGroup: FormGroup;
  loading = false;
  hide = true;
  matcher = new OwnErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private toastrService: ToastrService, private router: Router) {

  }

  get username(): any {
    return this.registrationFormGroup.get('username');
  }

  get email(): any {
    return this.registrationFormGroup.get('email');
  }

  get password(): any {
    return this.passwordFormGroup.get('password');
  }

  ngOnInit(): void {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      repeatPassword: ['', Validators.required]
    }, {
      validator: this.checkPasswords
    });
    this.additionalFieldsFormGroup = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),

    });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup,
      additionalFields: this.additionalFieldsFormGroup
    });
  }

  login() {
    // this._authenticationService.obtainAccessToken(this.loginData);
  }

  getUsernameMessage() {
    return this.username.hasError('required') ? 'You must enter username' :
      this.username.hasError('minlength') ? 'Username must be longer than 6 cases' : '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
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

  onSubmit() {
    const user: User = new User();
    // const resource = JSON.parse(this.registrationFormGroup.value);
    // user.username=
    console.log(this.passwordFormGroup);
    user.username = this.registrationFormGroup.controls['username'].value;
    user.email = this.registrationFormGroup.controls['email'].value;
    user.password = this.passwordFormGroup.controls['password'].value;
    user.matchingPassword = this.passwordFormGroup.controls['repeatPassword'].value;
    user.firstName = this.additionalFieldsFormGroup.controls['firstName'].value;
    user.lastName = this.additionalFieldsFormGroup.controls['lastName'].value;
    user.phoneNumber = this.additionalFieldsFormGroup.controls['phoneNumber'].value;
    console.log(user);
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          // this.loading=true;
          this.toastrService.success('Registration successful', 'Verification mail has been sent');
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.toastrService.error(error);
          this.loading = false;
        });
  }

  getUrl() {
    return 'url(\'\')';
  }
}
