import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-changepwdadmin',
  templateUrl: './changepwdadmin.component.html',
  styleUrls: ['./changepwdadmin.component.css']
})
export class ChangepwdadminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: AdminService) { }

  changepwdForm: FormGroup;

  admin:Admin=new Admin();
  a:Admin[];
  r:boolean;
  submitted: boolean = false;

  ngOnInit(): void {
    this.changepwdForm = this.formBuilder.group({
      aname: ['', Validators.required],
      apassword: ['', Validators.required]
    })
    this.service.getAdmins().subscribe(x=>this.a=x);
  }

  get f() {
    return this.changepwdForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.changepwdForm.invalid)
      return;
    else {
      this.r=this.service.pwdchangeSuccess(this.admin.aname,this.a);
      this.service.changepwd(this.admin).subscribe();
    }
  }
  getf()
  {
    return this.changepwdForm.controls;
  }

}
