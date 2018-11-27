import {Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {PictureService} from '../../../../../@core/service/picture/picture.service';
import {UserService} from '../../../../../@core/service/user/user.service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-picture-upload',
  templateUrl: './profile-picture-upload.component.html',
  styleUrls: ['./profile-picture-upload.component.scss']
})
export class ProfilePictureUploadComponent implements OnInit {
  hasProfile = false;
  imageToShow: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  constructor(private _translateService: TranslateService, private _toastr: ToastrService, private pictureService: PictureService, private userService: UserService) {
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
      }

    } else {
      this._toastr.error(this._translateService.instant('Toastr.error.invalid_format'));
    }

  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.pictureService.pushFileToStorageAndRapportProgressAndAssignToUser(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this._toastr.success(this._translateService.instant('Toastr.success.file_uploaded').toString());
          setTimeout(() => {
            this.refresh();
          }, 100);
        }
      },
      error => {
        this._toastr.error(error);
      }
    );

    this.selectedFiles = undefined;
  }

  private refresh(): void {
    window.location.reload();
  }
}
