import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Legal } from './legal.model';

@Injectable({
  providedIn: 'root'
})
export class LegalService {
  readonly ppApiUrl="https://latestloanapiaarti.azurewebsites.net/api/LegalDocuments";
  ppList: Legal[];
  ppData: Legal = new Legal();
  constructor(public objLeg:HttpClient) { }
  
  getLegalList()
   {
    this.objLeg.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Legal[]);
   }
   deleteLegal(id)
   {
    return this.objLeg.delete(this.ppApiUrl+"/"+id);
   }
   putLegal()
   {
    return this.objLeg.put(this.ppApiUrl+"/"+this.ppData.ApplicationNo, this.ppData);
   }
   postLegal()
   {
    return this.objLeg.post(this.ppApiUrl, this.ppData);
   }
}
