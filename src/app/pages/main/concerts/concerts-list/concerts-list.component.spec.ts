import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsListComponent } from './concerts-list.component';

describe('ConcertsListComponent', () => {
  let component: ConcertsListComponent;
  let fixture: ComponentFixture<ConcertsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
