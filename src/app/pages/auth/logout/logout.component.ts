import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../@core/service/authentication/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this._authenticationService.logout();
  }

  goToHome() {
    this._router.navigate(['/']);
  }
}
