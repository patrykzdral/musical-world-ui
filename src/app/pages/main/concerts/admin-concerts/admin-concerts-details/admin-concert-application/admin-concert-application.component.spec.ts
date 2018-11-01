import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertApplicationComponent } from './admin-concert-application.component';

describe('AdminConcertApplicationComponent', () => {
  let component: AdminConcertApplicationComponent;
  let fixture: ComponentFixture<AdminConcertApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConcertApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
