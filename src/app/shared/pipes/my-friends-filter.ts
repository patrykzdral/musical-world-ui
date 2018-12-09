import {Pipe, PipeTransform} from '@angular/core';
import {FriendModel} from '../../@core/model/friend.model';

@Pipe({
  name: 'myFriendsFilter'
})
export class MyFriendsFilter implements PipeTransform {

  transform(items: FriendModel[], searchText: string): FriendModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (it.username.toLowerCase().includes(searchText));
      // || it.firstName.toLowerCase().includes(searchText)
      // ||  it.lastName.toLowerCase().includes(searchText));
    });
  }
}
