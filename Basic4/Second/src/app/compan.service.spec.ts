import { TestBed, inject } from '@angular/core/testing';

import { CompanService } from './compan.service';

describe('CompanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanService]
    });
  });

  it('should be created', inject([CompanService], (service: CompanService) => {
    expect(service).toBeTruthy();
  }));
});
