import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AgGridNg2} from 'ag-grid-angular';

import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';
import {ConcertApplicationModel} from '../../../../../@core/model/concert-application.model';
import {ConcertInstrumentSlotModel} from '../../../../../@core/model/get-model/concert-instrument-slot.model';
import {ConcertWithPhotoModel} from '../../../../../@core/model/get-model/concert-with-photo.model';

@Component({
  selector: 'app-concert-details',
  templateUrl: './concert-details.component.html',
  styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit {

  concert: ConcertWithPhotoModel;
  public isRowSelectable;
  public buttonDisabled = true;
  hasProfile = false;
  imageToShow: any;
  rowData: any;


  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'app';

  columnDefs = [
    {headerName: 'Instrument', field: 'instrument.name', checkboxSelection: true},
    {headerName: 'is taken', field: 'taken'},
    {headerName: 'by who i taken', field: 'user.username'},
  ];

  constructor(private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private _concertApplicationService: ConcertApplicationService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.agGrid.api.sizeColumnsToFit();
  }

  ngOnInit() {
    this.isRowSelectable = function (node) {
      return node.data ? node.data.taken === false : false;
    };
    this.route.data.subscribe((data: { concert: ConcertWithPhotoModel }) => {
        if (data.concert) {
          this.concert = data.concert;
          if (this.concert.picture) {
            this.imageToShow = this.concert.picture;
            this.hasProfile = true;
          }
          this.rowData = this.concert.concertInstrumentSlots;
          console.log(this.concert.concertInstrumentSlots);
        } else {
          this.router.navigate(['/pages/concerts/show-all/']);

        }
      }
    );

  }

  hasProfilePic() {
    return this.hasProfile;
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node);
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  applyOnSelectedJob() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const concertApp = new ConcertApplicationModel();
    concertApp.concertInstrumentSlot = selectedData[0] as ConcertInstrumentSlotModel;
    concertApp.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this._concertApplicationService.save(concertApp)
      .pipe(first())
      .subscribe(
        data => {
          this.toastrService.success('Application has been sent', 'Now you have to wait until administrator responds');
          this.router.navigate(['/']);
        },
        error => {
          this.toastrService.error(error);
        });
  }


  onGridReady(params) {
    console.log('read');
    this.agGrid.api.sizeColumnsToFit();
  }

  cancel() {
    this.router.navigate(['/pages/concerts/show-all/']);
  }

  isAnySelected() {
    const selectedNode = this.agGrid.api.getSelectedNodes().length;
    if(selectedNode === 0) this.buttonDisabled=true;
    if(selectedNode !== 0) this.buttonDisabled=false;
  }
}
