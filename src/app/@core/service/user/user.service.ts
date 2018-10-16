import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {User} from '../../model/user.model';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {
  constructor(private http: AuthHttpService) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }
  getByUsername(username: string) : Observable<User>  {
    return this.http.findAllWithParams('/musicalworld/rest/api/users/', {username: username});
  }

  register(user: User) {
    return this.http.post('/musicalworld/rest/register', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
