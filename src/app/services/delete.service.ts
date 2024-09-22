import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Delete } from 'src/app/models/delete.model';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private url: string;


  constructor(private http: HttpClient) { 
  }

  public deleteByName(productsName:string): Observable<Delete> {
    this.url ='http://localhost:8080//deleteByName/'+productsName;

    return this.http.delete<Delete>(this.url,{headers});
  }}
