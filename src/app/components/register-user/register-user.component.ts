import { Component, OnInit } from '@angular/core';
import {Registrationdetails} from 'src/app/models/registrationdetails.model'
  import { RegisterService } from 'src/app/services/register.service';
  import { Router } from '@angular/router';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {




  public UserRegister={
    name:"",
    email:"",
    dob: "",
    contact:"",
    gender:"",
    password:"",
    confirmPassword:""

  }

  userDetails: Registrationdetails = {
    userName:this.UserRegister.name,
    userEmailId:  this.UserRegister.email,
    userPhoneNumber:this.UserRegister.contact,
    userDOB:this.UserRegister.dob,
    gender:this.UserRegister.gender,
    userPassword:this.UserRegister.password

  };


  onSubmit(value){
    console.log(value.name);
    console.log(value.email);
    console.log(value.dob);
    console.log(value.contact);
    console.log(value.gender);
    console.log(value.password);
    console.log(this.UserRegister.password);
    this.userDetails.userName = value.name;
    this.userDetails.userEmailId= value.email;
    this.userDetails.userPhoneNumber=value.contact;
    this.userDetails.userDOB=value.dob;
    this.userDetails.gender=value.gender;
    this.userDetails.userPassword=value.password;
    console.log(this.userDetails.userName);


     this._register.registerUser(this.userDetails).subscribe(data => {
       this.userDetails = data;
     })
     this.router.navigate(['/login']);

  }

  constructor(private _register: RegisterService,private router : Router) { 

  }
  ngOnInit(): void {
  

  }

 

  

}
