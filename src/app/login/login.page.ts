import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {FirebaseLoginService} from '../servicios/firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correoElectronico: string = "";
  password: string = "";

  constructor(public alerta: AlertController, public toast: ToastController, private router: Router, private loginFirebase:FirebaseLoginService) { }

  ngOnInit() {}

  // La función goToSignup debe estar fuera de ngOnInit
  goToSignup() {
    this.router.navigate(['/signup']);
  }

  async mensajeCorrecto() {
    const toast = await this.toast.create({
      message: 'Inicio de sesión correcto',
      duration: 2000
    });
    toast.present();
  }

  async mensajeError() {
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message: 'No puede ingresar con campos vacíos',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  ingresar() {
    if (this.correoElectronico === "" || this.password === "") {
      console.log("no puede haber valores vacíos");
      this.mensajeError();
    } else {
      this.loginFirebase.login(this.correoElectronico ,this.password).then(()=>{
        console.log("inicio exitoso");
        this.mensajeCorrecto();
        this.router.navigate(["/home"]).catch();
      }).catch(()=>{
        console.log("Error al iniciar sesion");
        this.mensajeError();
      });
    }
  }
}
