import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDeleteComponent } from './snack-bar-delete.component';

describe('SnackBarDeleteComponent', () => {
  let component: SnackBarDeleteComponent;
  let fixture: ComponentFixture<SnackBarDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
