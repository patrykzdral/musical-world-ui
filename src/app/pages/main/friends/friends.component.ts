import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ConcertApplicationExamineModel} from '../../../@core/model/concert-application-examine.model';
import {first} from 'rxjs/operators';
import {FriendService} from '../../../@core/service/friend/friend.service';
import {FriendListsService} from '../../../@core/service/friend/friend-lists.service';
import {friendListsModel} from '../../../@core/model/friend-lists.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor( private _friendService: FriendService, translateService: TranslateService) {
  }
  friendLists: friendListsModel;
  ngOnInit() {
    this._friendService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.friendLists=data;
        },
        error => {
        });
  }

  refresh(){
    this._friendService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.friendLists=data;
        },
        error => {
        });
  }

}
