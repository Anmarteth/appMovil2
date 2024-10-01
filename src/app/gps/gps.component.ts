import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements AfterViewInit { 

  constructor(private router: Router) {}

  ngAfterViewInit() {
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
    this.router.navigate(['/history']); // Navega a la página de historial
  }

  // Método para cargar el mapa MPBOX = pk.eyJ1IjoiYW5tYXJ0ZXRoIiwiYSI6ImNtMXFrcTIzajAxNGYyanBuZm12bG8zY2sifQ.rOC91vFSsEYOvPaCXFsvaQ
  loadMap() {
    const map = L.map('map').setView([-33.00839, -71.55164], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.00839, -71.55164]).addTo(map)
      .bindPopup('Ubicación seleccionada')
      .openPopup();
  }
}
