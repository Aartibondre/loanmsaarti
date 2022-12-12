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


const routes: Routes = [
   { path: '',       component: HomeComponent },
  
   { path: 'home/register', component: RegisterComponent},
   { path: 'expenses',   component: ApplyComponent},
   {path:'ContactAdmin', component:ContactAdminComponent},
   {path:'BorrowerAdmin', component:BorrowerAdminComponent,canActivate:[AuthGuard]},
   {path:'PropertyAdmin', component:PropertyAdminComponent},
   {path:'LegalAdmin', component:LegalAdminComponent},
 
   {path:'contact',component:ContactUsComponent},
   { path: '', redirectTo: 'expenses', pathMatch: 'full' },
   { path: '**',     component: LoginComponent },
   { path: 'login',       component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent },
   
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
