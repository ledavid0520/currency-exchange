import { TestBed } from '@angular/core/testing';

import { DivisaService } from './divisa.service';

describe('DivisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisaService = TestBed.get(DivisaService);
    expect(service).toBeTruthy();
  });
});
