import { TestBed } from '@angular/core/testing';

import { ProductsByTypeService } from './products-by-type.service';

describe('ProductsByTypeService', () => {
  let service: ProductsByTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsByTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
