import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FilterData} from './FilterData.model';
import {Observable} from 'rxjs';
import {Instrument} from '../../../../../@core/model/intrument.model';
import {InstrumentService} from '../../../../../@core/service/instrument/instrument.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-advanced-filter-dialog',
  templateUrl: './advanced-filter-dialog.component.html',
  styleUrls: ['./advanced-filter-dialog.component.scss']

})
export class AdvancedFilterDialogComponent implements OnInit{
  instrumentsModelObservable: Observable<Instrument[]>;
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public dialogRef: MatDialogRef<AdvancedFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterData,private _instrumentsService : InstrumentService ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    this.instrumentsModelObservable = this._instrumentsService.findAll();
  }

}