import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminConcertPictureUpdateComponent} from './admin-concert-picture-update.component';

describe('AdminConcertPictureUpdateComponent', () => {
  let component: AdminConcertPictureUpdateComponent;
  let fixture: ComponentFixture<AdminConcertPictureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConcertPictureUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcertPictureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
