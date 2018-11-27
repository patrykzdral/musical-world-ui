import {Component, Input, OnInit} from '@angular/core';
import {UserReferenceModel} from '../../../../../@core/model/user-reference.model';
import {UserReferenceService} from '../../../../../@core/service/user-reference/user-reference.service';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reference-box',
  templateUrl: './reference-box.component.html',
  styleUrls: ['./reference-box.component.scss']
})
export class ReferenceBoxComponent implements OnInit {

  userReference: UserReferenceModel = new UserReferenceModel();
  userReferencesObservable: Observable<UserReferenceModel[]>;

  @Input()
  notAdmin: boolean;

  constructor(private _userReferenceService: UserReferenceService, private _toastrService: ToastrService) {
  }

  @Input() set userTo(username: string) {
    this.userReference.userToUsername = username;
    this.userReference.userFromUsername = JSON.parse(localStorage.getItem('currentUser')).username;
  }

  ngOnInit() {
    this.userReferencesObservable = this._userReferenceService.findAllUserReferences(this.userReference.userToUsername);
  }


  sendOpinion() {
    console.log(this.userReference.userToUsername);
    this._userReferenceService.save(this.userReference)
      .pipe(first())
      .subscribe(
        data => {
          this._toastrService.success('Successfully added opinion!');
        },
        error => {
          this._toastrService.error(error);
        });
  }
}