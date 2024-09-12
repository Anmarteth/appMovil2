import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})






  // Aquí puedes agregar la lógica para registrarse






export class SignupPage {
  
  usuarios: { nombre: string, contraseña: string }[] = [];
  nombreUsuario: string = '';
  contrasenaUsuario: string = ''; 
  constructor() {}

  onSubmit(event: Event) {
    
    event.preventDefault();
    this.guardarUsuario(this.nombreUsuario, this.contrasenaUsuario);

    this.nombreUsuario = '';
    this.contrasenaUsuario = '';
  }

  guardarUsuario(nombre: string, contraseña: string) {
    this.usuarios.push({ nombre, contraseña });
    console.log('Usuarios guardados:', this.usuarios);
  }
}
