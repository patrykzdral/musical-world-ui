import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {pipe, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AgGridNg2} from 'ag-grid-angular';
import {GridOptions} from 'ag-grid-community';

import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {ConcertModel} from '../../../../../@core/model/get-model/concert.model';
import {ConcertApplicationService} from '../../../../../@core/service/concert-application/concert-application.service';
import {ConcertApplicationModel} from '../../../../../@core/model/concert-application.model';
import {ConcertInstrumentSlotModel} from '../../../../../@core/model/get-model/concert-instrument-slot.model';

@Component({
  selector: 'app-concert-details',
  templateUrl: './concert-details.component.html',
  styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  concert: ConcertModel;
  public isRowSelectable;
  public buttonDisabled = true;
  private gridOptions: GridOptions;

  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'app';

  columnDefs = [
    {headerName: 'Instrument', field: 'instrument.name', checkboxSelection: true},
    {headerName: 'is taken', field: 'taken'},
    {headerName: 'by who i taken', field: 'user.username'},
  ];

  rowData: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.agGrid.api.sizeColumnsToFit();
  }

  constructor(private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private _concertApplicationService: ConcertApplicationService) {
  }

  ngOnInit() {
    this.isRowSelectable = function (node) {
      return node.data ? node.data.taken === false : false;
    };
    this.route.data.subscribe((data: { concert: ConcertModel }) => {
        if (data.concert) {
          this.concert = data.concert;
          this.rowData = this.concert.concertInstrumentSlots;
          console.log(this.concert.concertInstrumentSlots);
          // this.bookForm.setValue({
          //   authors: data.book.authors,
          //   title: data.book.title
          // });
        } else {
          this.router.navigate(['/pages/concerts/show-all/']);

        }
      }
    );

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
    let concertApp = new ConcertApplicationModel();
    concertApp.concertInstrumentSlot = selectedData[0] as ConcertInstrumentSlotModel;
    console.log(concertApp.concertInstrumentSlot);
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
