import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage {
  
  constructor(private router: Router) { }

  usuarios: { correo: string, nombre:string, apellido:string, contraseña: string }[] = [];
  correoElectronico: string = '';
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  contrasenaUsuario: string = ''; 

  onSubmit(event: Event) {
    
    event.preventDefault();
    this.guardarUsuario(this.correoElectronico, this.nombreUsuario, this.apellidoUsuario, this.contrasenaUsuario);

    this.correoElectronico = '';
    this.nombreUsuario = '';
    this.apellidoUsuario = '';
    this.contrasenaUsuario = '';
  }

  guardarUsuario(correo: string, nombre: string, apellido: string, contraseña: string) {
    this.usuarios.push({ correo, nombre, apellido, contraseña });
    console.log('Usuarios guardados:', this.usuarios);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}