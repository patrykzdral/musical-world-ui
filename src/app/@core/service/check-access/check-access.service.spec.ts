import { TestBed } from '@angular/core/testing';

import { CheckAccessService } from './check-access.service';

describe('CheckAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckAccessService = TestBed.get(CheckAccessService);
    expect(service).toBeTruthy();
  });
});
