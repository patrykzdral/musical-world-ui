import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ConcertApplicationChangeModel} from '../../../../@core/model/concert-application-change.model';
import {ConcertApplicationService} from '../../../../@core/service/concert-application/concert-application.service';
import {ConcertApplicationExamineModel} from '../../../../@core/model/concert-application-examine.model';
import {FriendService} from '../../../../@core/service/friend/friend.service';
import {Observable} from 'rxjs';
import {ConcertWithPhotoModel} from '../../../../@core/model/get-model/concert-with-photo.model';
import {FriendModel} from '../../../../@core/model/friend.model';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  friendObservable: Observable<FriendModel[]>;
  searchText: string;
  constructor(private _friendService: FriendService, private _toastrService: ToastrService,
              private _router: Router) {
  }

  @Input()
  notFriends: FriendModel[];

  @Output()
  refresh: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    console.log(this.notFriends.toString())
  }

  navigateToUserDetails(id) {
    this._router.navigate(['/pages/profile/user-profile-show/', id]);

  }

  invite(id) {
    this._friendService.inviteFriend(id)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('You has sent invitation ');
          this.refresh.emit();
        },
        error => {
          this._toastrService.error(error);
        });
  }
}
