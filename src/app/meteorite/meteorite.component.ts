import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrl: './meteorite.component.css',
})
export class MeteoriteComponent {
  @Input() meteorite: string;

  constructor(public sharedService: SharedService) {}

  meteoriteClick(meteorite: string): void {
    this.sharedService.setSelectedMeteorite(meteorite);
  }
}
//ena 3o componentme onoma sun, ena kyklos. ota klikaro to planet-meteorite na emfanizontai ston ilio, anti gia to space poy einai tora. kitrinos ilios.
