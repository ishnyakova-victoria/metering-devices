import { TestBed } from '@angular/core/testing';

import { MeteringDeviceService } from './metering-device.service';

describe('MeteringDeviceService', () => {
  let service: MeteringDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteringDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
