import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from '../Medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-medicineslist',
  templateUrl: './medicineslist.component.html',
  styleUrls: ['./medicineslist.component.css']
})
export class MedicineslistComponent implements OnInit {

  constructor(private service:MedicinesService, private router:Router) { }

  medicines:Medicines[];

  ngOnInit(): void {
    this.service.getMedicines().subscribe(x=>this.medicines=x);
  }

  enablemedicine(med:any)
  {
    this.service.enableMed(med).subscribe();
  }

  sortallbycat()
  {
    this.service.getMedicinesbyCat().subscribe(x=>this.medicines=x);
  }

  sortallbyprice()
  {
    this.service.getMedicinesbyPrice().subscribe(x=>this.medicines=x);
  }

  sortallbydate()
  {
    this.service.getMedicinesbyDate().subscribe(x=>this.medicines=x);
  }
}
