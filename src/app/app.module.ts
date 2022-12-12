import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
 
import { RegisterComponent } from './home/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerRegComponent } from './customer/customer-reg/customer-reg.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ApplyComponent } from './customer/apply/apply.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

import { PropertyAdminComponent } from './apply/property-admin/property-admin.component';
import { BorrowerAdminComponent } from './apply/borrower-admin/borrower-admin.component';
import { LegalAdminComponent } from './apply/legal-admin/legal-admin.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
 

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent, 
        RegisterComponent,
        CustomerDisplayComponent,
        CustomerRegComponent,
        ContactUsComponent,
        AboutusComponent,
        ServicesComponent,
        ApplyComponent,
        LoginComponent,
        LogoutComponent,
        ContactAdminComponent,
        PropertyAdminComponent,
        BorrowerAdminComponent,
        LegalAdminComponent,
        DashboardComponent,
        StatusComponent
        
   
    ],
    providers: [ {provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
  
    ]
})
export class AppModule { }
