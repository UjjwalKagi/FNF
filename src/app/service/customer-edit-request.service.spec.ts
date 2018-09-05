import { TestBed, inject } from '@angular/core/testing';

import { CustomerEditRequestService } from './customer-edit-request.service';

describe('CustomerEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerEditRequestService]
    });
  });

  it('should be created', inject([CustomerEditRequestService], (service: CustomerEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
