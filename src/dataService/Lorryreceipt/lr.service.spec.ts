import { TestBed } from '@angular/core/testing';

import { LrService } from './lr.service';

describe('LrService', () => {
  let service: LrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
