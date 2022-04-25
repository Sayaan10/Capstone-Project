import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';
import { ChangepwdadminComponent } from './changepwdadmin/changepwdadmin.component';
import { ChangepwduserComponent } from './changepwduser/changepwduser.component';
import { EditmedicineComponent } from './editmedicine/editmedicine.component';
import { EnabledisablemedComponent } from './enabledisablemed/enabledisablemed.component';
import { MedicineslistComponent } from './medicineslist/medicineslist.component';
import { PurchasemedicineComponent } from './purchasemedicine/purchasemedicine.component';
import { RemovemedicineComponent } from './removemedicine/removemedicine.component';
import { SearchmedicinesComponent } from './searchmedicines/searchmedicines.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {"path":"admin",component:AdminloginComponent},
  {"path":"admin/adminreg",component:AdminregisterComponent},
  {"path":"admin/admindash",component:AdmindashboardComponent},
  {"path":"admin/admindash/adminlist",component:AdminlistComponent},
  {"path":"admin/admindash/userlist",component:UserlistComponent},
  {"path":"admin/admindash/medslist",component:MedicineslistComponent},
  {"path":"admin/admindash/medslist/addmed",component:AddmedicineComponent},
  {"path":"admin/admindash/medslist/editmed",component:EditmedicineComponent},
  {"path":"admin/admindash/medslist/removemed",component:RemovemedicineComponent},
  {"path":"admin/admindash/endismed",component:EnabledisablemedComponent},
  {"path":"admin/admindash/changepwdadmin",component:ChangepwdadminComponent},
  {"path":"admin/admindash/adminlogout",component:AdminlogoutComponent},
  {"path":"user",component:UserloginComponent},
  {"path":"user/userreg",component:UserregisterComponent},
  {"path":"user/userdash",component:UserdashboardComponent},
  {"path":"user/userdash/searchmed",component:SearchmedicinesComponent},
  {"path":"user/userdash/changepwduser",component:ChangepwduserComponent},
  {"path":"user/userdash/userlogout",component:UserlogoutComponent},
  {"path":"user/userdash/searchmed/purcmed",component:PurchasemedicineComponent},
  {"path":"user/userdash/searchmed/purcmed/book",component:BookingsuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
