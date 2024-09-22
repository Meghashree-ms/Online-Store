import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Update} from 'src/app/models/update.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private url: string; 


  constructor(private http: HttpClient) { }

  public updateProduct(productDetails:Update): Observable<Update> {
    this.url="http://localhost:8080/addProduct"
    let body = JSON.stringify(productDetails); 
    console.log("body is " +body)
    return this.http.put<Update>(this.url,body,{headers});
  }
}
