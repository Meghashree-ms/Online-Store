import { Component, OnInit } from '@angular/core';

import {LoginstatusService} from 'src/app/services/loginstatus.service'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _loginStatus:LoginstatusService) { 

   
  }

   loginStatus:boolean

  ngOnInit(): void {
    this._loginStatus.currentData.subscribe(data =>{
      this.loginStatus=data;

    })
    console.log(this.loginStatus)
    
  }

  ngOnChanges(): void {
    // this._loginStatus.currentData.subscribe(data =>{
    //   this.loginStatus=data;

    // })
    // console.log(this.loginStatus)
    
  }

  

  

  




}
