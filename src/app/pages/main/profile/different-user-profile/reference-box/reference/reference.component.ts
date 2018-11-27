import {Component, Input, OnInit} from '@angular/core';
import {UserReferenceModel} from '../../../../../../@core/model/user-reference.model';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor() {
  }

  _userReference: UserReferenceModel;

  @Input() set userReference(userReference: UserReferenceModel) {
    this._userReference = userReference;
  }

  ngOnInit() {
  }

}
