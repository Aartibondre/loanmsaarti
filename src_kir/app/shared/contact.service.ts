import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from './model.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly ppApiUrl="https://loanstationapi.azurewebsites.net/api/Contacts";
  ppList: Contact[];
  ppData:Contact=new Contact();
  pid:any;
  constructor(private objcHttp:HttpClient) { 

   }
   getContact()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList =res as Contact[]);
   }
   
   postContact()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   } 
}

