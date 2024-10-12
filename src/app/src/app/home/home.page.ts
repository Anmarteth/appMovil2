import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para la navegación

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

    option={
      slidesPerView:1.5,
      centeredSlides:true,
      loop:true,
      spaceBetween:10,
      autoplay:true
    }
  // Método para navegar a la página del GPS
  // Método para ir al home
  goHome() {
    this.router.navigate(['/home']); // Navega a la página de inicio
  }

  // Método para ir a la página de GPS
  goToGps() {
    this.router.navigate(['/gpss']);
  }

  // Método para ir al historial
  goToHistory() {
    this.router.navigate(['/historial']); // Navega a la página de historial
    
  }

    // Método para cerrar sesión
    logout() {
      this.router.navigate(['/login']); // Navega a la página de inicio de sesión
    }

}