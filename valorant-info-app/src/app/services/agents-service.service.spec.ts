import { TestBed } from '@angular/core/testing';

import { AgentsServiceService } from './agents-service.service';

describe('AgentsServiceService', () => {
  let service: AgentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
