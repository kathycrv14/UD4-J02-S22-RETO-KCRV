import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username(){ return this.loginForm.get('username'); }
  get password(){ return this.loginForm.get('password'); }

  SalirDeRuta(): Observable<boolean>|boolean {
    if (this.username?.value === "" || this.password?.value === "") {
      alert("Debes llenar los campos!!");
      return false;
    }
    return true;
    }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  }
}
