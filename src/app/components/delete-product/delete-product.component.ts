import { Component, OnInit } from '@angular/core';
import {DeleteService} from 'src/app/services/delete.service'

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private _product: DeleteService) { }

  temp
  status=false
  productsName: string;

  onSubmit():void{
    this._product.deleteByName(this.productsName).subscribe(data => {
      this.temp = data;
    });
    this.status=true
    
  }
  ngOnInit(): void {
  }

}
