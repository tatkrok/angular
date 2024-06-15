import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
})
export class SpaceComponent {
  @Input() selectedPlanet: string = '_'; //to Input xreiazeai edo? pote xrisimopoioyme input. grapta.
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

  constructor() {
    this.printPlanets();
    this.printMeteorites();
  }

  printPlanets(): void {
    for (let i = 0; i < this.planets.length; i++) {
      console.log(this.planets[i]);
    }

    this.planets.forEach((planet: string) => {
      console.log(planet);
    });
  }

  printMeteorites(): void {
    for (let i = 0; i < this.meteorites.length; i++) {
      console.log(this.meteorites[i]);
    }

    this.meteorites.forEach((meteorite: string) => {
      console.log(meteorite);
    });
  }

  changeSelectedPlanet(_planet: string) {
    this.selectedPlanet = _planet;
  }
}
//same gia meteorites.
//na do gia input .
