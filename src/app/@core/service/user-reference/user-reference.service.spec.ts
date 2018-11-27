import {TestBed} from '@angular/core/testing';

import {UserReferenceService} from './user-reference.service';

describe('UserReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserReferenceService = TestBed.get(UserReferenceService);
    expect(service).toBeTruthy();
  });
});
