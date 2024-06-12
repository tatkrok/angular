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
}
