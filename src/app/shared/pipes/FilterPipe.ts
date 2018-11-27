import {Pipe, PipeTransform} from '@angular/core';
import {ConcertWithPhotoModel} from '../../@core/model/get-model/concert-with-photo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: ConcertWithPhotoModel[], searchText: string): ConcertWithPhotoModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      console.log(it.name);
      console.log(searchText);
      console.log(it.name.toLowerCase().includes(searchText));
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
