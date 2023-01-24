import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    LoginComponent,
    RegistrarComponent
  ]
})
export class PrincipalModule { }
