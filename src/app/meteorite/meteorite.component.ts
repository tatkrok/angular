import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrl: './meteorite.component.css',
})
export class MeteoriteComponent {
  @Input() meteorite: string;

  constructor() {
  }

  meteoriteClick(meteorite: string): void {
    console.log(meteorite);
  }

}
