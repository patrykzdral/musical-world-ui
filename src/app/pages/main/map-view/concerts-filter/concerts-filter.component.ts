import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdvancedFilterDialogComponent} from './advanced-filter-dialog/advanced-filter-dialog.component';

@Component({
  selector: 'app-concerts-filter',
  templateUrl: './concerts-filter.component.html',
  styleUrls: ['./concerts-filter.component.scss']
})
export class ConcertsFilterComponent{
  value = '';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AdvancedFilterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  filter(){

  }
}

