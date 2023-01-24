import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { LoginComponent } from './principal/login/login.component';
import { RegistrarComponent } from './principal/registrar/registrar.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, canDeactivate: [CandesactivateGuard]},
  {path: 'registro', component: RegistrarComponent, canDeactivate: [CandesactivateGuard]},

  {path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
