import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
