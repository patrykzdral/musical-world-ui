import { TestBed, inject } from '@angular/core/testing';

import { InstrumentService } from './instrument.service';

describe('InstrumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentService]
    });
  });

  it('should be created', inject([InstrumentService], (service: InstrumentService) => {
    expect(service).toBeTruthy();
  }));
});
