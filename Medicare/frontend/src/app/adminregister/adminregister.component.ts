import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: AdminService, private router:Router) { }

  registerForm: FormGroup;

  admin:Admin=new Admin();
  r:boolean;
  submitted: boolean = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      aname: ['', Validators.required],
      aemail: ['', Validators.required],
      apassword: ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid)
      return;
    else {
      console.log(this.admin);
      this.service.registerAdmin(this.admin).subscribe();
      this.r=true;
    }
  }
  getf()
  {
    return this.registerForm.controls;
  }

}
