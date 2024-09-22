import { Component, OnInit } from '@angular/core';
import { ProductService} from 'src/app/services/product.service';
import {Products} from 'src/app/models/products.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _product: ProductService) { }

  allProducts: Products[];

  

  ngOnInit(): void {
    this._product.getAll().subscribe(data => {
      this.allProducts = data;
    });
  }

}
