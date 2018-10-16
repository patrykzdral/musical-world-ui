import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFilterDialogComponent } from './advanced-filter-dialog.component';

describe('AdvancedFilterDialogComponent', () => {
  let component: AdvancedFilterDialogComponent;
  let fixture: ComponentFixture<AdvancedFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
