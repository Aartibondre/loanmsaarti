import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { LegalService } from 'src/app/shared/legal.service';

@Component({
  selector: 'app-legal-admin',
  templateUrl: './legal-admin.component.html',
  styleUrls: ['./legal-admin.component.css']
})
export class LegalAdminComponent implements OnInit {

  constructor(public objSrv:LegalService) { 
    this.resetForm();
    this.objSrv.getLegalList();
  }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteLegal(pid).subscribe(res=>{ 
        this.objSrv.getLegalList();
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
      this.objSrv.ppData={ApplicationNo:0,PropertyProof:'',BankSalarySlip:'',AddressProof:'',GuarantorName:'',GuarantorProofType:'',GuarantorProofId:''};


    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.ApplicationNo==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    console.log(this.objSrv.ppData);
    this.objSrv.postLegal().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getLegalList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putLegal().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getLegalList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
