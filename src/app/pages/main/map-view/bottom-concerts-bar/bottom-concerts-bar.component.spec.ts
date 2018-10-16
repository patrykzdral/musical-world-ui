import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomConcertsBarComponent } from './bottom-concerts-bar.component';

describe('BottomConcertsBarComponent', () => {
  let component: BottomConcertsBarComponent;
  let fixture: ComponentFixture<BottomConcertsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomConcertsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomConcertsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
