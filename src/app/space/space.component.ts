import { Component } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
})
export class SpaceComponent {
  planetEarth: string = 'Earth';
  planetNepton: string = 'Nepton';
  planetMercury: string = 'Mercury;';
}
