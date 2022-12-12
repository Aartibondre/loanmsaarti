import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  data: string;

  constructor(public objSrv:CustomerService) { }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteCustomer(pid).subscribe(res=>{ 
        this.objSrv.getCustomerList();
        alert('Record Deleted Successfully!!!');
        },
        err=>{alert('Error!!!'+err);}) 
    }
    
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objSrv.ppData={BorrowerId:0,FirstName:'',LastName:'',Contact:'',Dob:'',Gender:'',Occupation:'',IdentityType:'',IdentityId:'', Address:'',City:'',State:'',ZipCode:'', Status:''};

    }
  }
  onSubmit(form:NgForm)
  {
   
    this.searchRecord(form);   
  }
  

  searchRecord(form:NgForm)
  {
    this.objSrv.searchCustomer(this.objSrv.ppData.BorrowerId).subscribe(res=>{
      this.data=res;
      const obj = JSON.parse(this.data);
      alert(obj.Status+"!!!");
    },
    err=>{alert('Your application Id is invalid');}) 
  }
}
