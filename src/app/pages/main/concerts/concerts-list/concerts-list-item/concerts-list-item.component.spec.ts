import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConcertsListItemComponent} from './concerts-list-item.component';

describe('ConcertsListItemComponent', () => {
  let component: ConcertsListItemComponent;
  let fixture: ComponentFixture<ConcertsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertsListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
