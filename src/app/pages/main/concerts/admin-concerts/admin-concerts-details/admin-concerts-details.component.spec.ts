import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertsDetailsComponent } from './admin-concerts-details.component';

describe('AdminConcertsDetailsComponent', () => {
  let component: AdminConcertsDetailsComponent;
  let fixture: ComponentFixture<AdminConcertsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConcertsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
