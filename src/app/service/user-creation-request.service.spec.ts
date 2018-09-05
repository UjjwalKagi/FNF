import { TestBed, inject } from '@angular/core/testing';

import { UserCreationRequestService } from './user-creation-request.service';

describe('UserCreationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCreationRequestService]
    });
  });

  it('should be created', inject([UserCreationRequestService], (service: UserCreationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
