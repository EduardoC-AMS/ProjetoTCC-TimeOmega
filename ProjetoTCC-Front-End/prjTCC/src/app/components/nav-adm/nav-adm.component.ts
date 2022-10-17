import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-adm',
  templateUrl: './nav-adm.component.html',
  styleUrls: ['./nav-adm.component.css']
})
export class NavAdmComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  admincategory(){
    this.route.navigate(["/admincategory"])
  }
}
