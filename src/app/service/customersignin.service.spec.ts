import { TestBed, inject } from '@angular/core/testing';

import { CustomersigninService } from './customersignin.service';

describe('CustomersigninService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersigninService]
    });
  });

  it('should be created', inject([CustomersigninService], (service: CustomersigninService) => {
    expect(service).toBeTruthy();
  }));
});
