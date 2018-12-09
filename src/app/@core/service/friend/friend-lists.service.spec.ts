import { TestBed } from '@angular/core/testing';

import { FriendListsService } from './friend-lists.service';

describe('FriendListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendListsService = TestBed.get(FriendListsService);
    expect(service).toBeTruthy();
  });
});
