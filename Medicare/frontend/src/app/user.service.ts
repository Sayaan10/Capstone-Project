import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://localhost:8081/medicare/user/list";
  url2:string="http://localhost:8081/medicare/user/login";
  url3:string="http://localhost:8081/medicare/user/insert";
  url4:string="http://localhost:8081/medicare/user/updatepwd";

  flag:number=0;

  constructor(private http:HttpClient, private router:Router) { }

  registerUser(user:any):Observable<User[]>
  {
    return this.http.post<User[]>(this.url3,user);
  }

  pwdchangeSuccess(name:String,user:any):boolean
  {
    for(let u of user)
    {
      if(u.uname===name)
      {
        this.flag=1;
      }
    }
    if(this.flag===1)
      return true;
    else
      return false;
  }

  login(name:String,password:String,users:any):boolean
  {
    for(let u of users)
    {
      if(u.uname===name && u.upassword===password)
      {
        this.router.navigateByUrl("user/userdash");
        this.flag=1;
      }
    }
    if(this.flag===1)
      return true;
    else
      return false;
  }

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }

  changepwd(user:any):Observable<User[]>
  {
    return this.http.put<User[]>(this.url4,user);
  }
}
