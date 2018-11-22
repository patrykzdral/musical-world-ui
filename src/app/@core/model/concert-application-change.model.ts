import {ConcertInstrumentSlotModel} from './get-model/concert-instrument-slot.model';
import {User} from './user.model';

export class ConcertApplicationChangeModel {
  public id: any;
  public user: User;
  public concertInstrumentSlot: ConcertInstrumentSlotModel;


  constructor(id: any, user: User, concertInstrumentSlot: ConcertInstrumentSlotModel) {
    this.id = id;
    this.user = user;
    this.concertInstrumentSlot = concertInstrumentSlot;
  }
}
