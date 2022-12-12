import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  
  constructor(public objSrv:SignupService, public obj:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objSrv.ppData={Id:0, UserNameOrEmail: '', Password:'', Confirm_Password:''};
      this.objSrv.ppLogData={userName: '', password:''};
    }
  }
  onSubmit(form:NgForm)
  {
    
    this.objSrv.postUser().subscribe(
        res=>{this.resetForm(form);
          localStorage.setItem("jwt",res["Data"])
          let tokenInfo = JSON.parse(atob(localStorage.jwt.split('.')[1]));
          localStorage.setItem("role",tokenInfo["role"]);
          localStorage.setItem("userNameOrEmail",tokenInfo["nameid"]);
          
        this.objSrv.getUser();
        alert("Record Insertion Success!!!");
        },
        err=>{alert('Error!!! Check your inputted field');}
    )
  }
  
  onSignup(){
    console.log(this.objSrv.ppData);
    if(this.objSrv.ppData.Id==0){
      //perform signup
      this.objSrv.postUser().subscribe(
        res=>{ 
          
        this.objSrv.getUser();
        alert("Record Insertion Success!!!");
        },
        err=>{alert('Error!!! Check your inputted field');}
    )  
  }
}
   
  onSubmitLogin(){
    console.log(this.objSrv.ppLogData);
  if(this.objSrv.ppLogData!=null){
   
    //Send obj to db
    this.objSrv.postLogin().subscribe(
      res=>{
      this.objSrv.getUser();
      alert("Login Success!!!");
      this.route.navigate(["expenses"]);
      },
      err=>{alert('Invalid Username or Password');}
    )
  
    }
  }
  
}
  
   
