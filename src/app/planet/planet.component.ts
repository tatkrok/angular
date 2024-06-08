import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  @Input() planetName: string;

  constructor() {
    console.log('shgds');
  }
  onPlanetClick(planetName: string): void {
    console.log(planetName);
  }
}
