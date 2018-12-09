import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriendsComponent } from './my-friends.component';

describe('MyFriendsComponent', () => {
  let component: MyFriendsComponent;
  let fixture: ComponentFixture<MyFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
