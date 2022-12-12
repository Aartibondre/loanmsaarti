import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styleUrls: ['./customer-display.component.css']
})
export class CustomerDisplayComponent implements OnInit {

  constructor(public objSrv:CustomerService) { }

  ngOnInit(): void {
    this.objSrv.getCustomerList();
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
      this.objSrv.ppData={BorrowerId:0,FirstName:'',LastName:'',Contact:'',Dob:new Date("01/02/2000"),Gender:'',Occupation:'',IdentityType:'',IdentityId:'',Address:'',City:'',State:'',ZipCode:''};
    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.BorrowerId==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCustomerList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}