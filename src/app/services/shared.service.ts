import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedPlanet: string;
  selectedMeteorite: string;
  constructor() {}

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
