import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../shared/contact.service';


@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {

  constructor(public objSrv:ContactService) {
    this.objSrv.getContact();
    this.resetForm();
   }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteContact(pid).subscribe(res=>{ 
        this.objSrv.getContact();
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
      this.objSrv.ppData={Id:0,Full_Name:'',Email:'',Message:''};
    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.Id==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postContact().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getContact();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putContact().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getContact();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}


