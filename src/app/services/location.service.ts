import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: { latitude: number; longitude: number; timestamp: Date }[] = [];

  constructor() {}

  saveLocation(latitude: number, longitude: number) {
    const newLocation = { latitude, longitude, timestamp: new Date() };
    this.locations.push(newLocation); // Agregar la nueva ubicación a la lista
  }

  getLocations() {
    return this.locations; // Retornar todas las ubicaciones guardadas
  }
}
