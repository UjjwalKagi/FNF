import { TestBed, inject } from '@angular/core/testing';

import { CourtCreationRequestService } from './court-creation-request.service';

describe('CourtCreationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourtCreationRequestService]
    });
  });

  it('should be created', inject([CourtCreationRequestService], (service: CourtCreationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
