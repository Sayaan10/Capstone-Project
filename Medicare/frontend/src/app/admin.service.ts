import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url:string="http://localhost:8081/medicare/admin/insert";
  url1:string="http://localhost:8081/medicare/admin/list";
  url2:string="http://localhost:8081/medicare/admin/updatepwd";
  flag:number=0;

  constructor(private http:HttpClient, private router:Router) { }

  registerAdmin(admin:any):Observable<Admin[]>
  {
    return this.http.post<Admin[]>(this.url,admin);
  }

  pwdchangeSuccess(name:String,admin:any):boolean
  {
    for(let a of admin)
    {
      if(a.aname===name)
      {
        this.flag=1;
      }
    }
    if(this.flag===1)
      return true;
    else
      return false;
  }

  login(name:String,password:String,admins:any):boolean
  {
    for(let a of admins)
    {
      if(a.aname===name && a.apassword===password)
      {
        this.router.navigateByUrl("admin/admindash");
        this.flag=1;
      }
    }
    if(this.flag===1)
      return true;
    else
      return false;
    
  }

  getAdmins():Observable<Admin[]>
  {
    return this.http.get<Admin[]>(this.url1);
  }

  changepwd(admin:any):Observable<Admin[]>
  {
    return this.http.put<Admin[]>(this.url2,admin);
  }
}
