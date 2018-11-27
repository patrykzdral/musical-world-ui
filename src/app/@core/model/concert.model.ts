import {Address} from './address.model';
import {Instrument} from './intrument.model';

export class Concert {
  public name: string;
  public description: any;
  public dateFrom: any;
  public dateTo: any;
  public numberOfRehearsals: any;
  public ensuredDrive: any;
  public guaranteedMeal: any;
  public address: Address;
  public concertInstrumentSlots: Instrument[];
  public pictureName: any;
}
