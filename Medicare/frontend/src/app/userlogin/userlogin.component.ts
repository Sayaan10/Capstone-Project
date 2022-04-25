import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: UserService) { }

  loginForm: FormGroup;

  user:User=new User();
  a:boolean;
  users:User[];
  submitted: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      upassword: ['', Validators.required]
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
      this.service.getUsers().subscribe(x=>this.users=x);
      this.a=this.service.login(this.user.uname,this.user.upassword,this.users);
    }
  }
  getf()
  {
    return this.loginForm.controls;
  }

}
