import { Component, OnInit } from '@angular/core';
import {ProductByName} from 'src/app/models/product-by-name.model';
import {ProductByNameService} from 'src/app/services/product-by-name.service'
import {Update} from 'src/app/models/update.model'
import {UpdateService} from 'src/app/services/update.service'

@Component({
  selector: 'app-edit-product-by-name',
  templateUrl: './edit-product-by-name.component.html',
  styleUrls: ['./edit-product-by-name.component.css']
})
export class EditProductByNameComponent implements OnInit {

  constructor(private _product: ProductByNameService,private _update:UpdateService) { }


  product: ProductByName;

  productsName: string;



  onSubmit():void{
    this._product.getByName(this.productsName).subscribe(data => {
      this.product = data;
    });
    
  }

  onSubmitUpdate(){

    // this.dataToBeUpdated.productName=this.product.productName;
    // this.dataToBeUpdated.productType=this.product.productType;
    // this.dataToBeUpdated.productPrice=this.product.productPrice;
    // this.dataToBeUpdated.productQuantity=this.product.productQuantity;
    // this.dataToBeUpdated.productAvailability=this.product.productAvailability;
    // this.dataToBeUpdated.productRating=this.product.productRating;

    this._update.updateProduct(this.product).subscribe(data => {
      this.product=data
    })

  }

  



  ngOnInit(): void {
  }

}
