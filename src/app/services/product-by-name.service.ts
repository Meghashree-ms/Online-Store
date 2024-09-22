import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductByName } from 'src/app/models/product-by-name.model';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ProductByNameService {

  private url: string;

  public getByName(productsName:string): Observable<ProductByName> {
    this.url ='http://localhost:8080/getProductByName/'+productsName;

    return this.http.get<ProductByName>(this.url,{headers});
  }

  constructor(private http: HttpClient) { }
}
