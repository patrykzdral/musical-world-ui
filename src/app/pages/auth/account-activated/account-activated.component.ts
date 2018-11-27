import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-activated',
  templateUrl: './account-activated.component.html',
  styleUrls: ['./account-activated.component.scss']
})
export class AccountActivatedComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  goToHome() {
    this._router.navigate(['/']);

  }
}
