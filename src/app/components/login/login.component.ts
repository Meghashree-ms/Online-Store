import { Component, Injectable, OnInit } from '@angular/core';
import {Logindetails} from 'src/app/models/logindetails.model';
import { LoginService } from 'src/app/services/login.service';
import {LoginstatusService} from 'src/app/services/loginstatus.service'
import {BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private _login: LoginService,private _loginStatus: LoginstatusService,private router:Router) { }

  // public UserLogin={
  //   name:"",
  //   password:""

  // }

  userLoginDetails:Logindetails = new Logindetails();

  // userLoggedin:Logindetails = {
  //   userName:'',
  //   userPassword:''

  // };

  // userDetails: Logindetails = {
  //   userName:this.UserLogin.name,
  //   userPassword:this.UserLogin.password

  // };

  status:boolean=false;
  loginErrorMessage:string;

  onSubmit(){
  
    this.status=!this.status;
    // this.userDetails.userName = this.UserLogin.name;
    // this.userDetails.userPassword=this.UserLogin.password;
   
     this._login.loginUser(this.userLoginDetails).subscribe(data => {
      this.router.navigate(['/allProducts']);
      this._loginStatus.setData(true);

     },error =>{
      this.loginErrorMessage="Username/Password is incorrect";
      this._loginStatus.setData(false);

     });

    //  if(this.userLoggedin.userName!=""){
    //   this.router.navigate(['/dashboard']);
    //  }

      this._loginStatus.setData(this.status);

    //  console.log(this.userLoggedin);

    //  console.log(this.userLoggedin.userPassword);
    //  console.log(this.userLoggedin.userName);


     
  }

  ngOnInit(): void {
  }

}
