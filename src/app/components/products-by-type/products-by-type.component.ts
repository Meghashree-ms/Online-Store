import { Component, OnInit } from '@angular/core';
import {ProductsByType} from 'src/app/models/products-by-type.model'
import {ProductsByTypeService} from 'src/app/services/products-by-type.service'

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.css']
})
export class ProductsByTypeComponent implements OnInit {

  constructor(private _product: ProductsByTypeService) { }

  allProducts: ProductsByType[];

  productsType: string;

  onSubmit():void{
    this._product.getAllByType(this.productsType).subscribe(data => {
      this.allProducts = data;
    });
    
  }

  ngOnInit(): void {

  }

}
