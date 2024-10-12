import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage {
  
  constructor(private router: Router) { }

  usuarios: { nombre: string, contraseña: string }[] = [];
  nombreUsuario: string = '';
  contrasenaUsuario: string = ''; 

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
  goToLogin() {
    this.router.navigate(['/login']);
  }
}