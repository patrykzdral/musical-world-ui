import {ConcertInstrumentSlotModel} from './concert-instrument-slot.model';

export class ConcertModel {
  id: any;
  name: any;
  description: any;
  dateFrom: any;
  dateTo: any;
  address: any;
  concertInstrumentSlots: ConcertInstrumentSlotModel[];
  numberOfRehearsals: any;
  ensuredDrive: boolean;
  guaranteedMeal: boolean;
}
