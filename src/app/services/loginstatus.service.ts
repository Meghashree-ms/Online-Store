import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginstatusService {

  private data = new BehaviorSubject(false);
  currentData = this.data.asObservable();

  setData(data:boolean){
      this.data.next(data);
      console.log("Inside Service, status is: "+this.data)
  }

  getData():any{
      return this.data;
  }

  constructor() { }
}
