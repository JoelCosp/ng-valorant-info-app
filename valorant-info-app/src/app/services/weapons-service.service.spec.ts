import { TestBed } from '@angular/core/testing';

import { WeaponsServiceService } from './weapons-service.service';

describe('WeaponsServiceService', () => {
  let service: WeaponsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
