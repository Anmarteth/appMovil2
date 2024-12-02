import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { LocationService } from '../services/location.service'; // Importar el servicio

@Component({
  selector: 'app-gpss',
  templateUrl: './gpss.page.html',
  styleUrls: ['./gpss.page.scss'],
})
export class GpssPage implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private router: Router, private locationService: LocationService) {}

  ngOnInit() {
    this.loadMap();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToGps() {
    this.router.navigate(['/gps']);
  }

  goToHistory() {
    this.router.navigate(['/historial']);
  }

  async loadMap() {
    try {
      const position = await Geolocation.getCurrentPosition();

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      // Guardar ubicación en el historial
      this.locationService.saveLocation(this.latitude, this.longitude);

      const map = L.map('map').setView([this.latitude, this.longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([this.latitude, this.longitude])
        .addTo(map)
        .bindPopup('Tu ubicación actual')
        .openPopup();
    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
    }
  }
}
