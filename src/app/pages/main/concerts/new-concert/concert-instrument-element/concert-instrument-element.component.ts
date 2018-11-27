import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from '../../../../../@core/model/intrument.model';

@Component({
  selector: 'app-concert-instrument-element',
  templateUrl: './concert-instrument-element.component.html',
  styleUrls: ['./concert-instrument-element.component.scss']
})
export class ConcertInstrumentElementComponent implements OnInit {
  constructor() {
  }

  _instrument: Instrument;

  @Input()
  set instrument(value: Instrument) {
    this._instrument = value;
  }

  ngOnInit(): void {
    this._instrument.quantity = 1;
  }
}
