import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { LegalService } from 'src/app/shared/legal.service';
import { PropertyService } from 'src/app/shared/property.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(public cusServ:CustomerService, public propSrv:PropertyService, public objLegal:LegalService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.cusServ.ppData={BorrowerId:0,FirstName:'',LastName:'',Contact:'',Dob:new Date("2000-01-01"),Gender:'',Occupation:'',IdentityType:'',IdentityId:'', Address:'',City:'',State:'',ZipCode:'', Status:''};
    }
  }
  onSubmit(form1:NgForm)
  {
    this.cusServ.postCustomer().subscribe(
        res=>{this.resetForm(form1);
        this.cusServ.getCustomerList();
        alert("Record is inserted and saved successfully!!!");
        },
        err=>{alert('Error!!!'+err);}
    )
  }
  onSubmitProperty(form2:NgForm) {
    this.propSrv.postProperty().subscribe(
      res=>{this.resetForm(form2);
      this.propSrv.getPropertyList();
      alert("Record is inserted and saved successfully");
      },
      err=>{alert('Error!!!'+err);}
  )
  }
  onSubmitLegal(form3:NgForm) {
    console.log(this.objLegal.ppData);
    this.objLegal.postLegal().subscribe(
      res=>{ this.resetForm(form3);
      this.objLegal.getLegalList();
      alert("Your application is submitted");
      },
      err=>{alert('Error!!!'+err);})
  }
  insertRecord(form:NgForm)
  {
    this.cusServ.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.cusServ.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
