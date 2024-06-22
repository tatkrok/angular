import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  @Input() planetName: string;
  @Output() planetClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedMeteoriteName: string;

  planetClick(planetName: string): void {
    this.planetClicked.emit(planetName);
  }
}
