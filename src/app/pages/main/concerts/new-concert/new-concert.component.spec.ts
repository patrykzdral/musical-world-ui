import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewConcertComponent} from './new-concert.component';

describe('NewConcertComponent', () => {
  let component: NewConcertComponent;
  let fixture: ComponentFixture<NewConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewConcertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
