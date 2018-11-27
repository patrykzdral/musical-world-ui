import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminConcertInfoUpdateComponent} from './admin-concert-info-update.component';

describe('AdminConcertInfoUpdateComponent', () => {
  let component: AdminConcertInfoUpdateComponent;
  let fixture: ComponentFixture<AdminConcertInfoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConcertInfoUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
