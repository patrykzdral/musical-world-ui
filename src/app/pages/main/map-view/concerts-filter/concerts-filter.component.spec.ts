import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConcertsFilterComponent} from './concerts-filter.component';

describe('ConcertsFilterComponent', () => {
  let component: ConcertsFilterComponent;
  let fixture: ComponentFixture<ConcertsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertsFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
