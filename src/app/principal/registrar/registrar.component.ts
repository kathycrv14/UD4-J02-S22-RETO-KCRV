import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  // VALIDACION

  constructor(private autenticacion: AutenticacionService, private router: Router , private formBuilder : FormBuilder){}

  redireccion = '';

  login(){
    this.autenticacion.login();
    this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '';
    this.router.navigate(['/post']);
  }

  datos_padre: any;
  botonDeshabilitado = false;
  mostrar : boolean = false;

  registroForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  // Generar un metodo get para cada campo del formulario reactivo
  get firstname(){ return this.registroForm.get('firstname');}
  get lastname(){ return this.registroForm.get('lastname');}
  get username(){ return this.registroForm.get('username');}
  get password(){ return this.registroForm.get('password');}

    // genera que el registroForm se vuelva un array 

    // this.datos_padre = Object.values(this.registroForm.getRawValue()); 

    Enviar(){
      this.datos_padre = (this.registroForm.value); 
    }

    Activar(){
      if(this.registroForm.valid){
        this.botonDeshabilitado = true;
      } else {
        this.botonDeshabilitado = false;
      }
    }

    ngOnInit(){
      this.registroForm.statusChanges.subscribe(status => {
        this.botonDeshabilitado = status === 'VALID';
      });
    }

  // CANDEACTIVATE
//@D :p
  enviado = false;

  EnviarMensaje(){
    if(this.registroForm.invalid ){
      return
    }
    alert('Mensaje: ' + 'Datos enviados correctamente');
    this.enviado = true;
  }

  SalirDeRuta():Observable<boolean> | boolean{
    // criterios para evitar que el usuario abandone el componente
    if ((this.firstname?.value !="" || this.lastname?.value !="" || this.username?.value !=""|| this.password?.value !="") &&  !this.enviado) {
      const confirmar = confirm("¿Desea salir del formulario? \n Perdera todos los datos!!");
      return confirmar;
  }
  return true;
  }
}