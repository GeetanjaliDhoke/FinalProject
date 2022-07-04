import { TestBed } from '@angular/core/testing';

import { LabserviceService } from './labservice.service';

describe('LabserviceService', () => {
  let service: LabserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
