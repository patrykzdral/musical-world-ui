import {Instrument} from '../intrument.model';
import {User} from '../user.model';

export class ConcertInstrumentSlotModel {
  public id:any;
  public taken: boolean;
  public instrument: Instrument;
  public user: User;
}
