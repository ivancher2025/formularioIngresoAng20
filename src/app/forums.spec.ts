import { TestBed } from '@angular/core/testing';

import { Forums } from './forums';

describe('Forums', () => {
  let service: Forums;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Forums);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
