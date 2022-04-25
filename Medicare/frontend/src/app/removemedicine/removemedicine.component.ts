import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-removemedicine',
  templateUrl: './removemedicine.component.html',
  styleUrls: ['./removemedicine.component.css']
})
export class RemovemedicineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: MedicinesService, private router:Router) { }

  remForm: FormGroup;
  medicines:Medicines=new Medicines();
  submitted: boolean = false;

  ngOnInit(): void {
    this.remForm = this.formBuilder.group({
      mid: ['', Validators.required]
    })
  }

  get f() {
    return this.remForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.remForm.invalid)
      return;
    else {
      console.log(this.medicines);
      this.service.removeMed(this.medicines).subscribe();
      this.router.navigateByUrl("admin/admindash/medslist");
    }
  }
  getf()
  {
    return this.remForm.controls;
  }

}
