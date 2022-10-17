import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  categoryForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent> ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      categoryName : ['',Validators.required],
    })
  }

  AddCategory(){
    if(this.categoryForm.valid){
      this.api.postCategory(this.categoryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Categoria adicionada com sucesso");
          this.categoryForm.reset();
          this.dialogRef.close('Salvo');
        },
        error:()=>{
          alert("Erro não foi possivel adicionar")
        }
      })
    }
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

  //postCategories() {
    //var category = {description: this.desc} ;

      //this.http.post('https://localhost:7098/api/Category', category)
      //.subscribe(
       // resultado => {
          //console.log(resultado);
         // this.getCategories();
         // this.desc='';


        //},
        //erro => {
          //if(erro.status == 400) {
            //console.log(erro);
         //}
       //}
      //);
  //}
}


