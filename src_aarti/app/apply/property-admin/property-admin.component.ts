import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { PropertyService } from 'src/app/shared/property.service';

@Component({
  selector: 'app-property-admin',
  templateUrl: './property-admin.component.html',
  styleUrls: ['./property-admin.component.css']
})
export class PropertyAdminComponent implements OnInit {

  constructor(public objSrv:PropertyService) { }

  ngOnInit(): void {
    this.resetForm();
    this.objSrv.getPropertyList();
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteProperty(pid).subscribe(res=>{ 
        this.objSrv.getPropertyList();
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
      this.objSrv.ppData={ApplicantId:0,LoanType:'',LoanPurpose:'',RequestAmount:0,LoanTenure:0,};

    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.ApplicantId==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postProperty().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getPropertyList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putProperty().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getPropertyList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}


