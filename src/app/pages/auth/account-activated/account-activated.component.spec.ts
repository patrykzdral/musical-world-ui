import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivatedComponent } from './account-activated.component';

describe('AccountActivatedComponent', () => {
  let component: AccountActivatedComponent;
  let fixture: ComponentFixture<AccountActivatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountActivatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
