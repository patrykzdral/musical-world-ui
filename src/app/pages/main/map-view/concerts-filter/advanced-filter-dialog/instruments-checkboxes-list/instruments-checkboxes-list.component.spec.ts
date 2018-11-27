import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InstrumentsCheckboxesListComponent} from './instruments-checkboxes-list.component';

describe('InstrumentsCheckboxesListComponent', () => {
  let component: InstrumentsCheckboxesListComponent;
  let fixture: ComponentFixture<InstrumentsCheckboxesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentsCheckboxesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsCheckboxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
