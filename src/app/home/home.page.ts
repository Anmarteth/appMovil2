import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para la navegación

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Método para navegar a la página del GPS
  // Método para ir al home
  goHome() {
    this.router.navigate(['/home']); // Navega a la página de inicio
  }

  // Método para ir a la página de GPS
  goToGps() {
    this.router.navigate(['/gps']);
  }

  // Método para ir al historial
  goToHistory() {
    this.router.navigate(['/history']); // Navega a la página de historial
  }

}
