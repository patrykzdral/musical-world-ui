import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class NavService {
  public appDrawer: any;

  constructor() {
  }

  public closeNav() {
    this.appDrawer.toggle();
  }

  public openNav() {
    this.appDrawer.toggle();
  }
}
