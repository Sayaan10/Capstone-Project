import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-editmedicine',
  templateUrl: './editmedicine.component.html',
  styleUrls: ['./editmedicine.component.css']
})
export class EditmedicineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: MedicinesService, private router:Router) { }

  editForm: FormGroup;
  medicines:Medicines=new Medicines();
  submitted: boolean = false;

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      mid: ['', Validators.required],
      mname: ['', Validators.required],
      mprice: ['', Validators.required],
      mdesc: ['', Validators.required],
      mcategory: ['', Validators.required],
      expiredate: ['', Validators.required],
      mcontrol: ['', Validators.required]
    })
  }

  get f() {
    return this.editForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid)
      return;
    else {
      console.log(this.medicines);
      this.service.editMed(this.medicines).subscribe();
      this.router.navigateByUrl("admin/admindash/medslist");
    }
  }
  getf()
  {
    return this.editForm.controls;
  }

}
