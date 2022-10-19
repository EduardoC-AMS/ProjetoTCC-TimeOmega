import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from 'src/app/components/crud-category/dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.css']
})
export class CrudCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllCategorys();
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllCategorys();
      }
    })
  }

  getAllCategorys(){
    this.api.getCategory()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editCategory(row : any){
    this.dialog.open(DialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllCategorys();
      }
    })
  }

  deleteCategory(id:number){
    this.api.deleteCategory(id)
    .subscribe({
      next:(res)=>{
        alert("Categoria deletada com sucesso");
        this.getAllCategorys();
      },
      error:()=>{
        alert("Não foi possivel deletar a categoria")
      }
    })
  }
}




