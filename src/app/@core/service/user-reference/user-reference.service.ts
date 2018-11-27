import {Injectable} from '@angular/core';
import {AuthHttpService} from '../http/auth-http.service';
import {UserReferenceModel} from '../../model/user-reference.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserReferenceService {

  constructor(private http: AuthHttpService) {
  }

  save(userReferenceModel: UserReferenceModel) {
    console.log(userReferenceModel);
    return this.http.save('/musicalworld/rest/api/user-references/save', userReferenceModel);
  }

  findAllUserReferences(username: String): Observable<UserReferenceModel[]> {
    return this.http.findAllWithParams('/musicalworld/rest/api/user-references/find-user', {username: username});
  }
}
