import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  @Input() planetName: string;

  planetClicked(planetName: string): void {
    console.log(planetName);
  }
}
