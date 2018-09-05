import { TestBed, inject } from '@angular/core/testing';

import { CustomerAddressCreationRequestService } from './customer-address-creation-request.service';

describe('CustomerAddressCreationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddressCreationRequestService]
    });
  });

  it('should be created', inject([CustomerAddressCreationRequestService], (service: CustomerAddressCreationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
