import {inject, TestBed} from '@angular/core/testing';

import {ConcertApplicationService} from './concert-application.service';

describe('ConcertApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcertApplicationService]
    });
  });

  it('should be created', inject([ConcertApplicationService], (service: ConcertApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
