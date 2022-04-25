import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-purchasemedicine',
  templateUrl: './purchasemedicine.component.html',
  styleUrls: ['./purchasemedicine.component.css']
})
export class PurchasemedicineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private service:MedicinesService, 
    private router:Router) { }

  qForm: FormGroup;

  medicine:Medicines=new Medicines();

  submitted: boolean = false;

  ngOnInit(): void {
    this.medicine=this.service.getOrderDetails();
    this.qForm = this.formBuilder.group({
      quan: ['', Validators.required]
    })
  }
  get f() {
    return this.qForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.qForm.invalid)
      return;
    else {
      this.router.navigateByUrl("user/userdash/searchmed/purcmed/book");
    }
  }
  getf()
  {
    return this.qForm.controls;
  }

}
