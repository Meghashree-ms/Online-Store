import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsByType } from 'src/app/models/products-by-type.model';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ProductsByTypeService {

  private url: string;


  constructor(private http: HttpClient) { 
  }

  public getAllByType(productsType:string): Observable<ProductsByType[]> {
        this.url ='http://localhost:8080/getAllProductsByType/'+productsType;

    return this.http.get<ProductsByType[]>(this.url,{headers});
  }
}
