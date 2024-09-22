import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Registrationdetails} from 'src/app/models/registrationdetails.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string; 

  
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080/registerUser';

  }

  public registerUser(userDetails:Registrationdetails): Observable<Registrationdetails> {
    let body = JSON.stringify(userDetails); 
    console.log("body is " +body)
    return this.http.post<Registrationdetails>(this.url,body,{headers});
  }
}
