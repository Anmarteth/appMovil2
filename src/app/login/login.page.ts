import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {FirebaseLoginService} from '../servicios/firebase-login.service';
import { UserControllerService } from '../servicios/user-controller.service';
import { Storage } from '@ionic/storage-angular';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correoElectronico: string = "";
  password: string = "";
  user:any;

  constructor(public alerta: AlertController, public toast: ToastController, private router: Router, private loginFirebase:FirebaseLoginService, private usercontroler:UserControllerService, private storage : Storage,public database:FirestoreService,) {

   }

  async ngOnInit() {
    await this.storage.create();
  }

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
      message: 'Datos inválidos',
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
        this.usercontroler.ObtenerDatos(this.correoElectronico).subscribe(user => {
          this.user = user;
        })
        this.storage.set("correoElectronico",this.correoElectronico);

        console.log("inicio exitoso");
        this.mensajeCorrecto();
        this.router.navigate(["/home"]).catch();
      }).catch(()=>{
        this.mensajeError();
      });
    }
  }
}
