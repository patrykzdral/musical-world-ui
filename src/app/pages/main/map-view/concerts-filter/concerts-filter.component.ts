import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdvancedFilterDialogComponent} from './advanced-filter-dialog/advanced-filter-dialog.component';
import {Instrument} from '../../../../@core/model/intrument.model';

@Component({
  selector: 'app-concerts-filter',
  templateUrl: './concerts-filter.component.html',
  styleUrls: ['./concerts-filter.component.scss']
})
export class ConcertsFilterComponent{
  @Output() mapTypeEmitter = new EventEmitter<number>();
  @Input() mapType: number;

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
  changeMapView(){
    let currentMapTypeId = this.mapType;
    currentMapTypeId++;
    if (currentMapTypeId > 3)
      currentMapTypeId = 0;
    this.mapType = currentMapTypeId;

    console.log("changed map view");
    console.log(this.mapType);
    this.mapTypeEmitter.emit(this.mapType);
  }
}


