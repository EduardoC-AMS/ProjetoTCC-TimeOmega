import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CRUDAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
}
