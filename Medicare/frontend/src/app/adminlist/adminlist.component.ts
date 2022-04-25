import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  constructor(private service:AdminService) { }

  admins:Admin[];

  ngOnInit(): void {
    this.service.getAdmins().subscribe(x=>this.admins=x);
  }

}
