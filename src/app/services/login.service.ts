import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Logindetails}  from 'src/app/models/logindetails.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');



@Injectable({
  providedIn: 'root'
})
export class LoginService {

private url: string; 


constructor(private http: HttpClient) { 
  this.url = 'http://localhost:8080/login';

}

public loginUser(userDetails:Logindetails): Observable<Logindetails> {
  let body = JSON.stringify(userDetails); 
  console.log("body is " +body)
  return this.http.post<Logindetails>(this.url,body,{headers});
}
}
