import { TestBed, inject } from '@angular/core/testing';

import { CourtAddressEditRequestService } from './court-address-edit-request.service';

describe('CourtAddressEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourtAddressEditRequestService]
    });
  });

  it('should be created', inject([CourtAddressEditRequestService], (service: CourtAddressEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
