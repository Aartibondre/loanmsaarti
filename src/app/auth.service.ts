import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiurl='https://latestloanapiaarti.azurewebsites.net/api/Users/Login';
  constructor(private http:HttpClient) {

   }
   ProceedLogin(UserCred:any){
     return this.http.post(this.apiurl,UserCred);
   }
   IsLoggedIn(){
     return localStorage.getItem('token')!=null;
   }
   GetToken(){
    return localStorage.getItem('token')||'';
   }
   HaveAccess(){
     var loggintoken=localStorage.getItem('token')||'';
     var _extractedtoken=loggintoken.split('.')[1];
     var _atobdata=atob(_extractedtoken);
     console.log(_atobdata);
     var _finaldata=JSON.parse(_atobdata);
     if(_finaldata.nameid=='admin'){
       return true
     }else{
       alert('you not having access');
       return false
     }
   }
   
}
