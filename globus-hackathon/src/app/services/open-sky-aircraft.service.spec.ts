import { TestBed } from '@angular/core/testing';

import { OpenSkyAircraftService } from './open-sky-aircraft.service';

describe('OpenSkyAircraftService', () => {
  let service: OpenSkyAircraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSkyAircraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
