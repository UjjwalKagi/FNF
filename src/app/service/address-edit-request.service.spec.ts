import { TestBed, inject } from '@angular/core/testing';

import { AddressEditRequestService } from './address-edit-request.service';

describe('AddressEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressEditRequestService]
    });
  });

  it('should be created', inject([AddressEditRequestService], (service: AddressEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
