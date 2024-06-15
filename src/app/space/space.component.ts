import { Component } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
})
export class SpaceComponent {
  planetMars: string = 'Mars';
  planetEarth: string = 'Earth';
  planetNeptune: string = 'Neptune';
  planetMercury: string = 'Mercury';
  planetVenus: string = 'Venus';
  planetJupiter: string = 'Jupiter';
  planetPluto: string = 'Pluto';
  planetEris: string = 'Eris';

  meteorite1: number = 1;
  meteorite2: number = 2;
  meteorite3: number = 3;
  meteorite4: number = 4;
  meteorite5: number = 5;
  meteorite6: number = 6;
  meteorite7: number = 7;
  meteorite8: number = 0;
}
