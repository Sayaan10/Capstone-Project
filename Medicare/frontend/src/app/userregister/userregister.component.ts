import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: UserService, private router:Router) { }

  registerForm: FormGroup;

  user:User=new User();
  r:boolean;
  submitted: boolean = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      uage: ['', Validators.required],
      uemail: ['', Validators.required],
      upassword: ['', Validators.required]
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
      console.log(this.user);
      this.service.registerUser(this.user).subscribe();
      this.r=true;
    }
  }
  getf()
  {
    return this.registerForm.controls;
  }

}
