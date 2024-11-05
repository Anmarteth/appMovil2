import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar Router para poder hacer la navegación

@Component({
  selector: 'app-header',  // Este es el selector que utilizarás en el HTML de tu página
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private router: Router) {}

  // Navegar a la página de inicio
  goHome() {
    this.router.navigate(['/home']);
  }

  // Navegar a la página de GPS
  goToGps() {
    this.router.navigate(['/gpss']);
  }

  // Navegar a la página de historial
  goToHistory() {
    this.router.navigate(['/history']);
  }

  // Navegar a la página de login (Cerrar sesión)
  logout() {
    this.router.navigate(['/login']);
  }
}
