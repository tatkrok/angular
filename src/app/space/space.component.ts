import { Component } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
})
export class SpaceComponent {
  planets: string[] = [
    'Mars',
    'Earth',
    'Neptune',
    'Mercury',
    'Venus',
    'Jupiter',
    'Pluto',
    'Eris',
  ];
  meteorites: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];

  constructor() { }

  printPlanets(): void {
    for (let i = 0; i <= this.planets.length; i++) {
      console.log(this.planets[i]);
    }

    this.planets.forEach((planet: string) => {
      console.log(planet);
    });
  }
}
