import { TestBed } from '@angular/core/testing';

import { PaisService } from './paises-service';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
