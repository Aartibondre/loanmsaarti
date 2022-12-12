import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  readonly ppApiUrl="https://loanstationapi.azurewebsites.net/api/PropertyInformations";
  ppList: Property[];
  ppData: Property = new Property();
  pid:any;
  constructor(public objcHttp:HttpClient) { }

  getPropertyList()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Property[]);
   }
   deleteProperty(id)
   {
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
   }
   putProperty()
   {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.ApplicationId, this.ppData);
   }
   postProperty()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   
}
