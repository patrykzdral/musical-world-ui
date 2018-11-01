import {NgModule} from '@angular/core';
import {MapViewComponent} from './map-view.component';
import {AgmCoreModule} from '@agm/core';
import {ConcertsFilterComponent} from './concerts-filter/concerts-filter.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatModule} from '../../../mat.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AdvancedFilterDialogComponent} from './concerts-filter/advanced-filter-dialog/advanced-filter-dialog.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { InstrumentsCheckboxesListComponent } from './concerts-filter/advanced-filter-dialog/instruments-checkboxes-list/instruments-checkboxes-list.component';
import { BottomConcertsBarComponent } from './bottom-concerts-bar/bottom-concerts-bar.component';
import {SnackBarDeleteComponent} from '../concerts/admin-concerts/admin-concerts-item/snack-bar-delete/snack-bar-delete.component';

@NgModule({
  declarations: [
    MapViewComponent,
    ConcertsFilterComponent,
    AdvancedFilterDialogComponent,
    InstrumentsCheckboxesListComponent,
    BottomConcertsBarComponent,
  ],
  imports: [
    AgmCoreModule,
    AngularFontAwesomeModule,
    MatModule,
    FormsModule,
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
  ],
  exports: [
    MapViewComponent,
    //   MapComponent

  ],

  providers: [],
  entryComponents: [
    AdvancedFilterDialogComponent,
    SnackBarDeleteComponent
  ]
})
export class MapViewModule {
}
