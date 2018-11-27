import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminConcertsComponent} from './admin-concerts.component';

describe('AdminConcertsComponent', () => {
  let component: AdminConcertsComponent;
  let fixture: ComponentFixture<AdminConcertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConcertsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
