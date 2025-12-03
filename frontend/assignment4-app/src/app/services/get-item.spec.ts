import { TestBed } from '@angular/core/testing';

import { GetItem } from './get-item';

describe('GetItem', () => {
  let service: GetItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
