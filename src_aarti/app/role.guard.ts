import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:AuthService,private route:Router){

  }
  canActivate(){
   if(this.service.HaveAccess()){
    return true;
   }else{
     this.route.navigate(['BorrowerAdmin']); 
     return false;
   }
  }
}
