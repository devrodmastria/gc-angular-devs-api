import { TestBed } from '@angular/core/testing';

import { InnovatorsService } from './innovators.service';

describe('InnovatorsService', () => {
  let service: InnovatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnovatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
