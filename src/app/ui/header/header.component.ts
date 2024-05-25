import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  x: string = 'Home';
  y: number = 1;
  z: boolean = true;

  changeSelectedMenu(selectedMenuName: string): void {
    this.x = selectedMenuName;
  }

  changeSelectedNumber(selectedNumber: number) {
    this.y = selectedNumber;
  }

  changeSelectedBoolean(selectedBoolean: boolean) {
    this.z = selectedBoolean;
  }
}
