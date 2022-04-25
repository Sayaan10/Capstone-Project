import { Component, OnInit } from '@angular/core';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-enabledisablemed',
  templateUrl: './enabledisablemed.component.html',
  styleUrls: ['./enabledisablemed.component.css']
})
export class EnabledisablemedComponent implements OnInit {

  constructor(private service:MedicinesService) { }

  medicines:Medicines[];

  ngOnInit(): void {
    this.service.getMedicinesEnabled().subscribe(x=>this.medicines=x);
  }

  disableMedicine(med:any)
  {
    this.service.disableMed(med).subscribe();
  }

}
