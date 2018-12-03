import {ConcertInstrumentSlotModel} from './concert-instrument-slot.model';
import {Address} from '../address.model';

export class ConcertWithPhotoModel {
  id: any;
  name: string;
  username: string;
  description: any;
  dateFrom: any;
  dateTo: any;
  concertInstrumentSlots: ConcertInstrumentSlotModel[];
  address: Address;
  numberOfRehearsals: any;
  ensuredDrive: boolean;
  guaranteedMeal: boolean;
  picture: string;
}
