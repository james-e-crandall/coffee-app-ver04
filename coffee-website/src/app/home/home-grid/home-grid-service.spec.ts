import { TestBed } from '@angular/core/testing';

import { HomeGridService } from './home-grid-service';

describe('HomeGridService', () => {
  let service: HomeGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
