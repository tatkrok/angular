import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  @Input() planetName: string;

  constructor(public sharedService: SharedService) { }

  planetClick(planetName: string): void {
    this.sharedService.setSelectedPlanet(planetName);
  }
}
