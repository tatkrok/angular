import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
})
export class SpaceComponent {
  selectedPlanet: string = '';
  selectedMeteorite: string = '';

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
  meteorite: string;
  planet: string;

  constructor(public sharedService: SharedService) {
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

  changeSelectedPlanet(_planet: string): void {
    this.selectedPlanet = _planet;
  }
  changeSelectedMeteorite(meteorite: string): void {
    this.selectedMeteorite = meteorite;
  }
  selectPlanet(planet: string) {
    this.selectedPlanet = planet;
    this.sharedService.setSelectedPlanet(planet);
  }

  selectMeteorite(meteorite: string) {
    this.selectedMeteorite = meteorite;
    this.sharedService.setSelectedMeteorite(meteorite);
  }
}
