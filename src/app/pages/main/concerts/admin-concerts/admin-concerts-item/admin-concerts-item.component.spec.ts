import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertsItemComponent } from './admin-concerts-item.component';

describe('AdminConcertsItemComponent', () => {
  let component: AdminConcertsItemComponent;
  let fixture: ComponentFixture<AdminConcertsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConcertsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
