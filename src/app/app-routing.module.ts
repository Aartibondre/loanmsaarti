import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BorrowerAdminComponent } from './apply/borrower-admin/borrower-admin.component';
import { LegalAdminComponent } from './apply/legal-admin/legal-admin.component';
import { PropertyAdminComponent } from './apply/property-admin/property-admin.component';
import { AuthGuard } from './auth.guard';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './customer/apply/apply.component';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { CustomerRegComponent } from './customer/customer-reg/customer-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RoleGuard } from './role.guard';
import { ServicesComponent } from './services/services.component'
import { StatusComponent } from './status/status.component';


const routes: Routes = [
   { path: '',       component: HomeComponent, canActivate:[AuthGuard] },
  
   { path: 'home/register', component: RegisterComponent},
   {path:'BorrowerAdmin', component:BorrowerAdminComponent,canActivate:[RoleGuard]},
   { path: 'apply',   component: ApplyComponent, canActivate:[AuthGuard] },
   {path:'ContactAdmin', component:ContactAdminComponent},
   {path:'dashboard', component:DashboardComponent,canActivate:[RoleGuard]},
   {path:'PropertyAdmin', component:PropertyAdminComponent,canActivate:[RoleGuard]},
   {path:'LegalAdmin', component:LegalAdminComponent,canActivate:[RoleGuard]},
   {path:'service', component:ServicesComponent},
   {path:'aboutus',component:AboutusComponent},
  {path:'logout',component:LogoutComponent},
   {path:'contact',component:ContactUsComponent},
   {path:'status',component:StatusComponent},
  
   { path: '**',     component: LoginComponent },
   
    
   
  // {
  //   path: "customer", component: CustomerComponent,
  //   children: [{
  //     path: "", component: ListingComponent
  //   },
  //   { path: "create", component: AddnewComponent },
  //   { path: "Edit/:id", component: AddnewComponent }
  //   ],canActivate:[RoleGuard]
  // },
  // {path:"login",component:LoginComponent}

//   {path:'',component:LoginComponent},
//   {path:'contact',component:ContactUsComponent},
//   {path:'home/register',component:RegisterComponent, canActivateChild: [],
  
//  },
//   {path:'applynow',component:CustomerRegComponent},
//   {path:'apply',component:ApplyComponent},
//   {path:'admin',component:CustomerDisplayComponent},
//   {path:'about', component:AboutusComponent},
//   {path:'service', component:ServicesComponent},
//   { path: 'login', component: LoginComponent },
//    { path: 'logout', component: LogoutComponent },
//    { path: 'expenses', component: ApplyComponent, canActivate: [ExpenseGuard]},
//    { path: 'adminexpenses', component: CustomerDisplayComponent, canActivate: [ExpenseGuard]},
//    { path: '', redirectTo: 'expenses', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
