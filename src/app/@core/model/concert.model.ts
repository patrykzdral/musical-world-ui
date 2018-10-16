import {Address} from './address.model';
import {ConcertInstrumentSlot} from './concert-instrument-slot.model';
import {Instrument} from './intrument.model';

export class Concert {
  public name: any;
  public description: any;
  public dateFrom: any;
  public dateTo: any;
  public numberOfRehearsals:any;
  public ensuredDrive:any;
  public guaranteedMeal:any;
  public address: Address;
  public username: string;
  public concertInstrumentSlots: Instrument[];
}
