import {Pipe, PipeTransform} from '@angular/core';
import {ConcertWithPhotoModel} from '../../@core/model/get-model/concert-with-photo.model';
import {FriendModel} from '../../@core/model/friend.model';

@Pipe({
  name: 'friendsFilter'
})
export class FriendsFilter implements PipeTransform {

  transform(items: FriendModel[], searchText: string): FriendModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    console.log(items);
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (it.username.toLowerCase().includes(searchText));
        // || it.firstName.toLowerCase().includes(searchText)
        // ||  it.lastName.toLowerCase().includes(searchText));
    });
  }
}
