import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedPlanet: string;
  selectedMeteorite: string;
  message: string;

  constructor() {}

  setMessage(message: string): void {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }

  setSelectedPlanet(planet: string): void {
    this.selectedPlanet = planet;
  }

  getSelectedPlanet(): string {
    return this.selectedPlanet;
  }

  setSelectedMeteorite(meteorite: string): void {
    this.selectedMeteorite = meteorite;
  }

  getSelectedMeteorite(): string {
    return this.selectedMeteorite;
  }
}
