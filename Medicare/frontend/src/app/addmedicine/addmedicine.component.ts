import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: MedicinesService, private router:Router) { }

  addmedForm: FormGroup;
  medicines:Medicines=new Medicines();
  submitted: boolean = false;

  ngOnInit(): void {
    this.addmedForm = this.formBuilder.group({
      mname: ['', Validators.required],
      mprice: ['', Validators.required],
      mdesc: ['', Validators.required],
      mcategory: ['', Validators.required],
      expiredate: ['', Validators.required],
      mcontrol: ['', Validators.required]
    })
  }

  get f() {
    return this.addmedForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.addmedForm.invalid)
      return;
    else {
      console.log(this.medicines);
      this.service.addMed(this.medicines).subscribe();
      this.router.navigateByUrl("admin/admindash/medslist");
    }
  }
  getf()
  {
    return this.addmedForm.controls;
  }

}
