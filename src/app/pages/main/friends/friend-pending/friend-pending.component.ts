import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FriendService} from '../../../../@core/service/friend/friend.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {FriendModel} from '../../../../@core/model/friend.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-friend-pending',
  templateUrl: './friend-pending.component.html',
  styleUrls: ['./friend-pending.component.scss']
})
export class FriendPendingComponent implements OnInit {

  searchText: string;
  constructor(private _friendService: FriendService, private _toastrService: ToastrService,
              private _router: Router) {
  }

  @Input()
  InvitationsSentByLoggedUser: FriendModel[];

  @Input()
  InvitationSentToLoggedUser: FriendModel[];
  
  @Output()
  refresh: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  navigateToUserDetails(username) {
    this._router.navigate(['/pages/profile/user-profile-show/', username]);

  }


  cancelInv(friendId: number) {
    console.log(friendId);
    this._friendService.cancelInvitation(friendId)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('You cancelled inv ');
          this.refresh.emit();
        },
        error => {
          this._toastrService.error(error);
        });
  }

  acceptFrie(friendId: number) {
    this._friendService.acceptFriend(friendId)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('Accepted friend successfully ');
          this.refresh.emit();
        },
        error => {
          this._toastrService.error(error);
        });
  }

  rejectFrie(friendId: number) {
    this._friendService.rejectFriend(friendId)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('Rejected friend successfully ');
          this.refresh.emit();
        },
        error => {
          this._toastrService.error(error);
        });
  }
}
