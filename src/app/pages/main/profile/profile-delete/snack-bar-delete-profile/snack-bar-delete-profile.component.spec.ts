import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnackBarDeleteProfileComponent} from './snack-bar-delete-profile.component';

describe('SnackBarDeleteProfileComponent', () => {
  let component: SnackBarDeleteProfileComponent;
  let fixture: ComponentFixture<SnackBarDeleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarDeleteProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
