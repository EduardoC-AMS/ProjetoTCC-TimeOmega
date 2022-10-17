import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CarouselBasicComponent } from './components/carousel-basic/carousel-basic.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SACComponent } from './components/sac/sac.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CRUDAdminComponent } from './components/crud-admin/crud-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavAdmComponent } from './components/nav-adm/nav-adm.component';
import { CrudCategoryComponent } from './components/crud-category/crud-category.component';
import { DialogComponent } from './components/crud-category/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    HomePageComponent,
    NavbarComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    SACComponent,
    VitrineComponent,
    CRUDAdminComponent,
    NavAdmComponent,
    CrudCategoryComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
