import { TestBed } from '@angular/core/testing';

import { NotAuthorizationGuard } from './not-authorization.guard';

describe('NotAuthorizationGuard', () => {
  let guard: NotAuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
