import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepwduser',
  templateUrl: './changepwduser.component.html',
  styleUrls: ['./changepwduser.component.css']
})
export class ChangepwduserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: UserService) { }

  changepwdForm: FormGroup;
  user:User=new User();
  u:User[];
  r:boolean;
  submitted: boolean = false;

  ngOnInit(): void {
    this.changepwdForm = this.formBuilder.group({
      uname: ['', Validators.required],
      upassword: ['', Validators.required]
    })
    this.service.getUsers().subscribe(x=>this.u=x);
  }

  get f() {
    return this.changepwdForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.changepwdForm.invalid)
      return;
    else {
      this.r=this.service.pwdchangeSuccess(this.user.uname,this.u);
      this.service.changepwd(this.user).subscribe();
    }
  }
  getf()
  {
    return this.changepwdForm.controls;
  }

}
