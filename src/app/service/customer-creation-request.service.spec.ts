import { TestBed, inject } from '@angular/core/testing';

import { CustomerCreationRequestService } from './customer-creation-request.service';

describe('CustomerCreationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerCreationRequestService]
    });
  });

  it('should be created', inject([CustomerCreationRequestService], (service: CustomerCreationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
