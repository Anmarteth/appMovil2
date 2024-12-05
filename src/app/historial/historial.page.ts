import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  locations: { latitude: number; longitude: number; timestamp: Date }[] = [];

  constructor(private router: Router, private locationService: LocationService) {}

  ngOnInit() {
    this.loadLocations();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToGps() {
    this.router.navigate(['/gpss']);
  }

  goToHistory() {
    this.router.navigate(['/historial']);
  }

  loadLocations() {
    this.locations = this.locationService.getLocations(); // Cargar ubicaciones desde el servicio
  }

  actualizarHistorial() {
    this.loadLocations(); // Refrescar el historial
    console.log('Historial actualizado');
  }
}
