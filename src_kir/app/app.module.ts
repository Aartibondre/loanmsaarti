import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
 
import { RegisterComponent } from './home/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegComponent } from './customer/customer-reg/customer-reg.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ApplyComponent } from './customer/apply/apply.component';
 

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
        
   
    ],
    providers: [],
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
