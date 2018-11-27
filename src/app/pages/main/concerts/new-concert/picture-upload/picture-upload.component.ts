import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss']
})
export class PictureUploadComponent implements OnInit {
  @Output() fileAdded = new EventEmitter<File>();

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  constructor(private _translateService: TranslateService, private _toastr: ToastrService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
      if (this.selectedFiles.item(0).size > 4194304) {
        this.selectedFiles = null;
        this._toastr.error(this._translateService.instant('Toastr.error.file_too_big'));
      } else {
        this.selectedFiles = event.target.files;
        this.currentFileUpload = event.target.files.item(0);
        this.fileAdded.emit(this.currentFileUpload);
      }

    } else {
      this._toastr.error(this._translateService.instant('Toastr.error.invalid_format'));
    }
  }

}
