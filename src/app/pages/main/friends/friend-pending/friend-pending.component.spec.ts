import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPendingComponent } from './friend-pending.component';

describe('FriendPendingComponent', () => {
  let component: FriendPendingComponent;
  let fixture: ComponentFixture<FriendPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
