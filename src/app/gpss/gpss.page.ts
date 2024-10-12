import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-gpss',
  templateUrl: './gpss.page.html',
  styleUrls: ['./gpss.page.scss'],
})
export class GpssPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadMap();
  }

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
    this.router.navigate(['/historial']); // Navega a la página de historial
  }

  // Método para cargar el mapa
  loadMap() {
    const map = L.map('map').setView([-33.00839, -71.55164], 15); // Asegúrate de que 'map' coincida con el ID del div
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([-33.00839, -71.55164]).addTo(map)
      .bindPopup('Ubicación seleccionada')
      .openPopup();
  }

}