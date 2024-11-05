import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router'; // Importa Router para la navegación}
import { Geolocation } from '@capacitor/geolocation';

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
    this.router.navigate(['/gpss']);
  }

  // Método para ir al historial
  goToHistory() {
    this.router.navigate(['/historial']); // Navega a la página de historial
  }

  // Método para cargar el mapa
  async loadMap() {
    const coordinates = await Geolocation.getCurrentPosition();

    const map = L.map('map').setView([coordinates.coords.latitude, coordinates.coords.longitude], 15); // Asegúrate de que 'map' coincida con el ID del div

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([coordinates.coords.latitude, coordinates.coords.longitude]).addTo(map)
      .bindPopup('Ubicación seleccionada')
      .openPopup();
  }

}