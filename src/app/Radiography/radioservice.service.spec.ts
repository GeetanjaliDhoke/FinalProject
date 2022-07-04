import { TestBed } from '@angular/core/testing';

import { RadioserviceService } from './radioservice.service';

describe('RadioserviceService', () => {
  let service: RadioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
