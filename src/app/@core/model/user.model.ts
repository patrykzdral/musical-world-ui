import {PictureModel} from './picture.model';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public matchingPassword: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public picture: PictureModel
}
