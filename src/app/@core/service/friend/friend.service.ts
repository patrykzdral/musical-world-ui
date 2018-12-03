import { Injectable } from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';
import {ConcertModel} from '../../model/get-model/concert.model';
import {FriendModel} from '../../model/friend.model';
import {FriendListsService} from './friend-lists.service';
import {friendListsModel} from '../../model/friend-lists.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private _authHttpService: AuthHttpService) {
  }

  getAll(): Observable<friendListsModel> {
    return this._authHttpService.findAll('/musicalworld/rest/api/friendship/get-friendship-info');
  }
  deleteFriend(id) {
    return this._authHttpService.deleteWithParams('/musicalworld/rest/api/friendship/delete-friend',{friendId: id});
  }
  inviteFriend(id) {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/friendship/invite-friend',{friendId: id});
  }
  acceptFriend(id) {
    return this._authHttpService.findAllWithParams('/musicalworld/rest/api/friendship/accept-friend',{friendId: id});
  }
  rejectFriend(id) {
    return this._authHttpService.deleteWithParams('/musicalworld/rest/api/friendship/reject-invitation',{friendId: id});
  }
  cancelInvitation(id) {
    return this._authHttpService.deleteWithParams('/musicalworld/rest/api/friendship/cancel-invitation',{friendId: id});
  }
}
