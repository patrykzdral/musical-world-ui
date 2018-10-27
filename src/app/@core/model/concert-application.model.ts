import {Instrument} from './intrument.model';
import {User} from './user.model';
import {ConcertInstrumentSlotModel} from './get-model/concert-instrument-slot.model';

export class ConcertApplicationModel {
  public username: any;
  public concertInstrumentSlot: ConcertInstrumentSlotModel;
  public accepted: boolean = false;
}
