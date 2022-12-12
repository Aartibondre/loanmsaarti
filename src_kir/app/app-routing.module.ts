import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './customer/apply/apply.component';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { CustomerRegComponent } from './customer/customer-reg/customer-reg.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'home/register',component:RegisterComponent,
  
 },
  {path:'applynow',component:CustomerRegComponent},
  {path:'apply',  component:ApplyComponent},
  {path:'admin',component:CustomerDisplayComponent},
  {path:'about', component:AboutusComponent},
  {path:'service', component:ServicesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
