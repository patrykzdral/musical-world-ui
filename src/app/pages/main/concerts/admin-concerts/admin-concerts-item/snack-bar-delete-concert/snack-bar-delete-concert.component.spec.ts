import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDeleteConcertComponent } from './snack-bar-delete-concert.component';

describe('SnackBarDeleteConcertComponent', () => {
  let component: SnackBarDeleteConcertComponent;
  let fixture: ComponentFixture<SnackBarDeleteConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarDeleteConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarDeleteConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
