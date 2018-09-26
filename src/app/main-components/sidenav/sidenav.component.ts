import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  screenResize(): boolean {
    const mq = window.matchMedia( "(min-width: 767px)" );

    return mq.matches;

  }

  navbarMode(): string{
    const mq = window.matchMedia( "(min-width: 767px)" );
    if(mq.matches){
      return "side";
    }
    else return "over";
  }
}
