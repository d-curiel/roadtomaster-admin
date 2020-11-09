import { TestBed } from '@angular/core/testing';

import { AttributeKindService } from './attribute-kind.service';

describe('AttributeKindService', () => {
  let service: AttributeKindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeKindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
