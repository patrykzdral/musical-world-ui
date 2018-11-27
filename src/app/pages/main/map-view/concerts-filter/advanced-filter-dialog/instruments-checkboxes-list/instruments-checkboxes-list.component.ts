import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from '../../../../../../@core/model/intrument.model';

@Component({
  selector: 'app-instruments-checkboxes-list',
  templateUrl: './instruments-checkboxes-list.component.html',
  styleUrls: ['./instruments-checkboxes-list.component.scss']
})
export class InstrumentsCheckboxesListComponent implements OnInit {

  constructor() {
  }

  _instrument: Instrument;

  @Input()
  set instrument(value: Instrument) {
    this._instrument = value;
  }

  ngOnInit() {
    this._instrument.chosen = false;
  }

}
