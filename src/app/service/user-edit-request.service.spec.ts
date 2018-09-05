import { TestBed, inject } from '@angular/core/testing';

import { UserEditRequestService } from './user-edit-request.service';

describe('UserEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEditRequestService]
    });
  });

  it('should be created', inject([UserEditRequestService], (service: UserEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
