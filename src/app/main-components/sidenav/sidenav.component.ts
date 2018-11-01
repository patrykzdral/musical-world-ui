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
      iconName: 'event',
      children: [
        {
          displayName: 'create new',
          iconName: 'create_new_folder',
          route: '/pages/concerts/create-new'
        },
        {
          displayName: 'show all',
          iconName: 'folder',
          route: '/pages/concerts/show-all'
        },
        {
          displayName: 'my concerts',
          iconName: 'star_half',
          route: '/pages/concerts/admin-concerts'
        }
      ]
    },
    {
      displayName: 'friends',
      iconName: 'person_pin',
      route: '/pages/friends'
    },
    {
      displayName: 'profile',
      iconName: 'assignment_ind',
      children: [
        {
          displayName: 'edit',
          iconName: 'border_color',
          route: '/pages/profile/edit'
        },
        {
          displayName: 'show',
          iconName: 'more',
          route: '/pages/profile/show'
        },
        {
          displayName: 'log out',
          iconName: 'exit_to_app',
          route: '/auth/logout'
        }

      ]
    },
    {
      displayName: 'orchestras',
      iconName: 'music_note',
      route: '/pages/orchestra'
    }
  ];

  ngOnInit() {
  }

  screenResize(): boolean {
    const mq = window.matchMedia('(min-width: 767px)');
    return mq.matches;
  }

  navbarMode(): string {
    const mq = window.matchMedia('(min-width: 767px)');
    if (mq.matches) {
      return 'side';
    }
    else return 'over';
  }

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
