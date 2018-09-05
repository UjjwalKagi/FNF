import { TestBed, inject } from '@angular/core/testing';

import { CourtAddressCreatioRequestService } from './court-address-creatio-request.service';

describe('CourtAddressCreatioRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourtAddressCreatioRequestService]
    });
  });

  it('should be created', inject([CourtAddressCreatioRequestService], (service: CourtAddressCreatioRequestService) => {
    expect(service).toBeTruthy();
  }));
});
