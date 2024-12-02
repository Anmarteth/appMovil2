import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {FirebaseLoginService} from '../servicios/firebase-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage {
  
  constructor(public alerta: AlertController, public toast: ToastController,private router: Router,private regFirebase:FirebaseLoginService) { }

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

  async mensajeCorrecto() {
    const toast = await this.toast.create({
      message: 'registro realizado',
      duration: 2000
    });
    toast.present();
  }

  async mensajeError() {
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message: 'error a la hora de ingresar datos',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


  guardarUsuario(correo: string, nombre: string, apellido: string, contraseña: string) {
    this.usuarios.push({ correo, nombre, apellido, contraseña });

    this.regFirebase.registro(correo ,contraseña).then(()=>{
      console.log("inicio exitoso");
      this.mensajeCorrecto();
      this.router.navigate(["/home"]).catch();
    }).catch(()=>{
      console.log("Error al iniciar sesion");
      this.mensajeError();
    });
    console.log('Usuarios guardados:', this.usuarios);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}