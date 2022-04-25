import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Medicines } from './Medicines';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  
  url:string="http://localhost:8081/medicare/medicines/list";
  url2:string="http://localhost:8081/medicare/medicines/insert";
  url3:string="http://localhost:8081/medicare/medicines/edit";
  url4:string="http://localhost:8081/medicare/medicines/delete";
  url5:string="http://localhost:8081/medicare/medicines/search";
  url6:string="http://localhost:8081/medicare/medicines/list/category";
  url7:string="http://localhost:8081/medicare/medicines/list/price";
  url8:string="http://localhost:8081/medicare/medicines/list/date";
  url9:string="http://localhost:8081/medicare/medicines/enable";
  url10:string="http://localhost:8081/medicare/medicines/list/enable";
  url11:string="http://localhost:8081/medicare/medicines/disable";

  r:Medicines=new Medicines();

  constructor(private http:HttpClient, private router:Router) { }

  getMedicines():Observable<Medicines[]>
  {
    return this.http.get<Medicines[]>(this.url);
  }

  getMedicinesEnabled():Observable<Medicines[]>
  {
    return this.http.get<Medicines[]>(this.url10);
  }

  getMedicinesbyCat():Observable<Medicines[]>
  {
    return this.http.get<Medicines[]>(this.url6);
  }

  getMedicinesbyPrice():Observable<Medicines[]>
  {
    return this.http.get<Medicines[]>(this.url7);
  }

  getMedicinesbyDate():Observable<Medicines[]>
  {
    return this.http.get<Medicines[]>(this.url8);
  }

  addMed(medicines:any):Observable<Medicines[]>
  {
    return this.http.post<Medicines[]>(this.url2,medicines);
  }

  editMed(medicines:any):Observable<Medicines[]>
  {
    return this.http.put<Medicines[]>(this.url3,medicines);
  }

  searchMeds(medicines:any):Observable<Medicines[]>
  {
    return this.http.put<Medicines[]>(this.url5,medicines);
  }

  removeMed(medicines:any):Observable<Medicines[]>
  {
    return this.http.put<Medicines[]>(this.url4,medicines);
  }

  enableMed(medicines:any):Observable<Medicines[]>
  {
    this.router.navigateByUrl("admin/admindash/medslist/endismed");
    return this.http.put<Medicines[]>(this.url9,medicines);
  }

  disableMed(medicines:any):Observable<Medicines[]>
  {
    this.router.navigateByUrl("admin/admindash/medslist");
    return this.http.put<Medicines[]>(this.url11,medicines);
  }

  addOrder(med:any)
  {
    this.r=med;
  }

  getOrderDetails()
  {
    console.log(this.r);
    return this.r;
  }

}
