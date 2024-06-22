import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrl: './meteorite.component.css',
})
export class MeteoriteComponent {
  @Input() meteorite: string;

  constructor(public sharedService: SharedService) { }

  meteoriteClick(meteorite: string): void {
    // this.meteoriteClicked.emit(meteorite);
  }
}
