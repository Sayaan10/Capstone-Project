import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-searchmedicines',
  templateUrl: './searchmedicines.component.html',
  styleUrls: ['./searchmedicines.component.css']
})
export class SearchmedicinesComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
    private service: MedicinesService) { }

  searchForm: FormGroup;
  medicines:Medicines=new Medicines();
  meds:Medicines[];
  medicine:Medicines[]=[];
  submitted: boolean = false;

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      mname: ['', Validators.required]
    })
  }

  get f() {
    return this.searchForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid)
      return;
    else {
      this.service.searchMeds(this.medicines).subscribe(x=>this.meds=x);
    }
  }
  getf()
  {
    return this.searchForm.controls;
  }

  purchase(med:any)
  {
    this.service.addOrder(med);
  }

}
