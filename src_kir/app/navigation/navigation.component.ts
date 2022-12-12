import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
}