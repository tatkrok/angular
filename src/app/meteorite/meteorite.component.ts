import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrl: './meteorite.component.css',
})
export class MeteoriteComponent {
  @Input() meteorite: string;
  @Output() meteoriteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedPlanetName: string;

  constructor() {}

  meteoriteClick(meteorite: string): void {
    this.meteoriteClicked.emit(meteorite);
  }
}
