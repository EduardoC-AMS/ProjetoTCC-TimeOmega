import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  categoryForm !: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent> ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      description : ['' ,Validators.required],
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.categoryForm.controls['description'].setValue(this.editData.description);
    }
  }

  AddCategory(){
    if(!this.editData){
      if(this.categoryForm.valid){
      this.api.postCategory(this.categoryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Categoria adicionada com sucesso");
          this.categoryForm.reset();
          this.dialogRef.close('Salvo');
          this.getAllCategorys();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar a categoria")
        }
      })
     }
    } else{
      this.updateCategoy()

    }
  }

  updateCategoy(){
    this.api.putCategory(this.categoryForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Categoria atualizada com sucesso");
        this.categoryForm.reset();
        this.dialogRef.close('Atualizado');
      },
      error:()=>{
        alert("Erro não foi possivel atualizar a categoria")
      }
    })
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
