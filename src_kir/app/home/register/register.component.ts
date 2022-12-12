import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  
  constructor(public objSrv:SignupService) { }

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
      },
      err=>{alert('Invalid Username or Password');}
    )
  
    }
  }
}
  
   
