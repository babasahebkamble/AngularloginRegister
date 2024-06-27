import { TestBed } from '@angular/core/testing';

import { ServicelocationService } from './servicelocation.service';

describe('ServicelocationService', () => {
  let service: ServicelocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
