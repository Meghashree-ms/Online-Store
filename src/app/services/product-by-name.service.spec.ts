import { TestBed } from '@angular/core/testing';

import { ProductByNameService } from './product-by-name.service';

describe('ProductByNameService', () => {
  let service: ProductByNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductByNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
