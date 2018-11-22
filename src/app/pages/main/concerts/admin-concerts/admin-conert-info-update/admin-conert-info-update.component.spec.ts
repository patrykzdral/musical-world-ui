import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConertInfoUpdateComponent } from './admin-conert-info-update.component';

describe('AdminConertInfoUpdateComponent', () => {
  let component: AdminConertInfoUpdateComponent;
  let fixture: ComponentFixture<AdminConertInfoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConertInfoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConertInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
