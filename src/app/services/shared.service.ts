import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedPlanet: string;
  constructor() { }

  setSelectedPlanet(planet: string): void {
    this.selectedPlanet = planet;
  }

  getSelectedPlanet(): string {
    return this.selectedPlanet;
  }

}
