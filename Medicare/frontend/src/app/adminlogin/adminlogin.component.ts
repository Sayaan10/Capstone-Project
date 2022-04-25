import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: AdminService, private router:Router) { }

  loginForm: FormGroup;

  admin:Admin=new Admin();
  a:boolean;
  admins:Admin[];
  submitted: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      aname: ['', Validators.required],
      apassword: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid)
      return;
    else {
      this.service.getAdmins().subscribe(x=>this.admins=x);
      this.a=this.service.login(this.admin.aname,this.admin.apassword,this.admins);
    }
  }
  getf()
  {
    return this.loginForm.controls;
  }

}
