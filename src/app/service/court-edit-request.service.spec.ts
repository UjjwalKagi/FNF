import { TestBed, inject } from '@angular/core/testing';

import { CourtEditRequestService } from './court-edit-request.service';

describe('CourtEditRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourtEditRequestService]
    });
  });

  it('should be created', inject([CourtEditRequestService], (service: CourtEditRequestService) => {
    expect(service).toBeTruthy();
  }));
});
