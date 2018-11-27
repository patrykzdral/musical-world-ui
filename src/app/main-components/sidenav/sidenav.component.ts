import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavItem} from './nav-item';
import {NavService} from '../../@core/service/navigation/nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @Input() item: NavItem;
  @Input() depth: number;
  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'concerts',
      iconName: 'concert',
      children: [
        {
          displayName: 'create new',
          iconName: 'new',
          route: '/pages/concerts/create-new'
        },
        {
          displayName: 'show all',
          iconName: 'all',
          route: '/pages/concerts/show-all'
        },
        {
          displayName: 'my concerts',
          iconName: 'my',
          route: '/pages/concerts/admin-concerts'
        }
      ]
    },
    {
      displayName: 'friends',
      iconName: 'friends',
      route: '/pages/friends'
    },
    {
      displayName: 'profile',
      iconName: 'profile',
      children: [
        {
          displayName: 'edit account',
          iconName: 'edit',
          route: '/pages/profile/edit'
        },
        {
          displayName: 'change picture',
          iconName: 'picture_change',
          route: '/pages/profile/picture-change'
        },
        {
          displayName: 'show',
          iconName: 'show',
          route: '/pages/profile/show'
        },
        {
          displayName: 'delete your account',
          iconName: 'delete',
          route: '/pages/profile/delete'
        }

      ]
    },
    {
      displayName: 'log out',
      iconName: 'logout',
      route: '/auth/logout'
    }
  ];

  constructor(private navService: NavService) {
  }

  ngOnInit() {
  }

  screenResize(): boolean {
    const mq = window.matchMedia('(min-width: 767px)');
    return mq.matches;
  }

  navbarMode(): string {
    const mq = window.matchMedia('(min-width: 767px)');
    if (mq.matches) {
      return 'c';
    } else {
      return 'over';
    }
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
