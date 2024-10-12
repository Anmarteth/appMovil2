import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {

  constructor(private router: Router) {}

  // Método para ir a las paginas
  goHome() {
    this.router.navigate(['/home']);
  }

  goToGps() {
    this.router.navigate(['/gpss']);
  }

  // Método para actualizar el historial
  actualizarHistorial() {
    // Aquí podrías agregar la lógica para refrescar la base de datos
    console.log("Historial actualizado");
  }

  // Método para ir a la página de historial
  goToHistory() {
    this.router.navigate(['/historial']);
  }
}
