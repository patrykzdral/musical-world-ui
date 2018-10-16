import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertInstrumentElementComponent } from './concert-instrument-element.component';

describe('ConcertInstrumentElementComponent', () => {
  let component: ConcertInstrumentElementComponent;
  let fixture: ComponentFixture<ConcertInstrumentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertInstrumentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertInstrumentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
