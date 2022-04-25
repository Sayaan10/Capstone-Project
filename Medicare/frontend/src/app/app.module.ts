import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MedicineslistComponent } from './medicineslist/medicineslist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChangepwdadminComponent } from './changepwdadmin/changepwdadmin.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { EditmedicineComponent } from './editmedicine/editmedicine.component';
import { RemovemedicineComponent } from './removemedicine/removemedicine.component';
import { EnabledisablemedComponent } from './enabledisablemed/enabledisablemed.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SearchmedicinesComponent } from './searchmedicines/searchmedicines.component';
import { ChangepwduserComponent } from './changepwduser/changepwduser.component';
import { PurchasemedicineComponent } from './purchasemedicine/purchasemedicine.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminregisterComponent,
    AdminloginComponent,
    AdminlistComponent,
    AdmindashboardComponent,
    MedicineslistComponent,
    UserlistComponent,
    ChangepwdadminComponent,
    AddmedicineComponent,
    EditmedicineComponent,
    RemovemedicineComponent,
    EnabledisablemedComponent,
    UserloginComponent,
    UserregisterComponent,
    UserdashboardComponent,
    SearchmedicinesComponent,
    ChangepwduserComponent,
    PurchasemedicineComponent,
    BookingsuccessComponent,
    AdminlogoutComponent,
    UserlogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
