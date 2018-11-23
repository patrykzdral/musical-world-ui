import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentUserProfileComponent } from './different-user-profile.component';

describe('DifferentUserProfileComponent', () => {
  let component: DifferentUserProfileComponent;
  let fixture: ComponentFixture<DifferentUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
