import { TestBed, inject } from '@angular/core/testing';

import { BookingCreatioRequestService } from './booking-creatio-request.service';

describe('BookingCreatioRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingCreatioRequestService]
    });
  });

  it('should be created', inject([BookingCreatioRequestService], (service: BookingCreatioRequestService) => {
    expect(service).toBeTruthy();
  }));
});
