import { TestBed, inject } from '@angular/core/testing';

import { PasswordEditRequestService } from './password-edit-request.service';

describe('PasswordEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordEditRequestService]
    });
  });

  it('should be created', inject([PasswordEditRequestService], (service: PasswordEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
