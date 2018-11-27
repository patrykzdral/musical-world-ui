import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReferenceBoxComponent} from './reference-box.component';

describe('ReferenceBoxComponent', () => {
  let component: ReferenceBoxComponent;
  let fixture: ComponentFixture<ReferenceBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
