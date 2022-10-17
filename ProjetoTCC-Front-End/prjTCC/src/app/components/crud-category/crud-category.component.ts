import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from 'src/app/components/crud-category/dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.css']
})
export class CrudCategoryComponent implements OnInit {

  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllCategorys
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  getAllCategorys(){
    this.api.getCategory()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }

  
}




