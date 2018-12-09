import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FriendService} from '../../../../@core/service/friend/friend.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {FriendModel} from '../../../../@core/model/friend.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {

  searchText: string;
  constructor(private _friendService: FriendService, private _toastrService: ToastrService,
              private _router: Router) {
  }

  @Input()
  myFriends: FriendModel[];

  @Output()
  refresh: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    console.log(this.myFriends.toString());
  }

  navigateToUserDetails(username) {
    this._router.navigate(['/pages/profile/user-profile-show/', username]);

  }

  deleteFriend(id) {
    this._friendService.deleteFriend(id)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('You deleted friend ');
          this.refresh.emit();
        },
        error => {
          this._toastrService.error(error);
        });
  }

}
