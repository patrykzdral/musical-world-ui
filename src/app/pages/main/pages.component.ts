import {Component} from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `<div class="component-scroll-bar"><app-sidenav><router-outlet></router-outlet></app-sidenav></div>`,
})
export class PagesComponent{

}
