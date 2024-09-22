import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductByNameComponent } from './edit-product-by-name.component';

describe('EditProductByNameComponent', () => {
  let component: EditProductByNameComponent;
  let fixture: ComponentFixture<EditProductByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
