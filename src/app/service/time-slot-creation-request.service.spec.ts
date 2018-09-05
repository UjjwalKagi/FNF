import { TestBed, inject } from '@angular/core/testing';

import { TimeSlotCreationRequestService } from './time-slot-creation-request.service';

describe('TimeSlotCreationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeSlotCreationRequestService]
    });
  });

  it('should be created', inject([TimeSlotCreationRequestService], (service: TimeSlotCreationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
