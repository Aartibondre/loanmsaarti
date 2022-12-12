import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //https://loanstationapi.azurewebsites.net
  
  readonly ppApiUrl="https://latestloanapiaarti.azurewebsites.net/api/Users/Register";
  readonly ppApiLogin = "https://latestloanapiaarti.azurewebsites.net/api/Users/Login";
  ppList: User[];
  ppData: User = new User();
  ppLogList: Login[];
  ppLogData: Login = new Login();
  pid:any;
  
  constructor(public objcHttp:HttpClient) { }
  getUser()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as User[]);
   }
  postUser()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   getLogin()
   {
    this.objcHttp.get(this.ppApiLogin).toPromise().then(res=>this.ppLogList= res as Login[]);
   }
  postLogin()
   {
    return this.objcHttp.post(this.ppApiLogin, this.ppLogData);
   }
}
