import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdvancedFilterDialogComponent} from './advanced-filter-dialog/advanced-filter-dialog.component';
import {Instrument} from '../../../../@core/model/intrument.model';
import {FilterData} from './advanced-filter-dialog/FilterData.model';

@Component({
  selector: 'app-concerts-filter',
  templateUrl: './concerts-filter.component.html',
  styleUrls: ['./concerts-filter.component.scss']
})
export class ConcertsFilterComponent{
  @Output() mapTypeEmitter = new EventEmitter<number>();
  @Output() filterDataEmitter = new EventEmitter<FilterData>();
  @Output() resetFilterEmitter = new EventEmitter<any>();


  @Input() mapType: number;
  value = '';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AdvancedFilterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.filter(result);
    });
  }


  filter(result: FilterData){
    this.filterDataEmitter.emit(result);
  }
  changeMapView(){
    let currentMapTypeId = this.mapType;
    currentMapTypeId++;
    if (currentMapTypeId > 3)
      currentMapTypeId = 0;
    this.mapType = currentMapTypeId;

    this.mapTypeEmitter.emit(this.mapType);
  }

  filterByName(value: string) {
    let result = new FilterData();
    result.eventName=value;
    this.filterDataEmitter.emit();
  }

  deleteFilters() {
    this.resetFilterEmitter.emit();
  }
}


