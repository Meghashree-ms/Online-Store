import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from 'src/app/models/products.model';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url ='http://localhost:8080/getAllProducts';
  }

  public getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url,{headers});
  }
}
