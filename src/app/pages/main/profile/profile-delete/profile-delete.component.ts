import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SnackBarDeleteProfileComponent} from './snack-bar-delete-profile/snack-bar-delete-profile.component';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.scss']
})
export class ProfileDeleteComponent implements OnInit {

  constructor(private _router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  deleteAccount() {
    this.snackBar.openFromComponent(SnackBarDeleteProfileComponent, {
      data: JSON.parse(localStorage.getItem('currentUser')).username
    }).onAction().subscribe(() => {
    });
  }
}
