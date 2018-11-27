import {Injectable} from '@angular/core';
import {User} from '../../model/user.model';
import {AuthHttpService} from '../http/auth-http.service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {UserWithPhotoModel} from '../../../pages/main/profile/profile-picture-change/user-with-photo.model';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {
  constructor(private http: AuthHttpService) {
  }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  getByUsername(username: string): Observable<User> {
    return this.http.findAllWithParams('/musicalworld/rest/api/users/', {username: username});
  }

  getUserWithPhoto(username: string): Observable<UserWithPhotoModel> {
    return this.http.findAllWithParams('/musicalworld/rest/api/users/with-photo', {username: username});
  }

  register(user: User) {
    return this.http.post('/musicalworld/rest/register', user);
  }


  delete(id: number) {
    return this.http.delete('/api/users/', id);
  }

  deleteByUsername() {
    const httpParams = new HttpParams()
    return this.http.deleteWithParams('/musicalworld/rest/api/users/', httpParams);
  }

  activateAccount(token: string) {
    const httpParams = new HttpParams()
      .append('token', token);
    return this.http.post('/musicalworld/rest/registrationConfirm', httpParams, {
      responseType: 'text'
    });
  }

  requestPasswordReset(email: string) {
    const httpParams = new HttpParams()
      .append('email', email);
    return this.http.post('/musicalworld/rest/user/requestResetPassword', httpParams);

  }

  confirmResetPassword(password: any, token: any): Observable<string> {
    const httpParams = new HttpParams()
      .append('password', password)
      .append('token', token);

    return this.http.post('/musicalworld/rest/user/confirmResetPassword', httpParams, {
      responseType: 'text'
    });
  }

  editUser(userWithPhotoModel: UserWithPhotoModel) {
    return this.http.put('/musicalworld/rest/api/users/', userWithPhotoModel, null);
  }
}
