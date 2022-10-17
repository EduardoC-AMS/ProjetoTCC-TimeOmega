import { CRUDAdminComponent } from './components/crud-admin/crud-admin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SACComponent } from './components/sac/sac.component';
import { CrudCategoryComponent } from './components/crud-category/crud-category.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'sac', component: SACComponent},
  {path:'admincategory', component: CrudCategoryComponent},
  {path:'admin', component: CRUDAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

