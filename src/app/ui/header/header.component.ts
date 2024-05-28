import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  x: string = 'Home';
  i: string = 'Home';
  y: number = 1;
  z: boolean = true;

  changeSelectedMenu(selectedMenuName: string): void {
    this.x = selectedMenuName;
  }

  selectedMenuName(selectedMenuName: string): void {
    this.i = selectedMenuName;
  }

  changeSelectedNumber(selectedNumber: number): void {
    this.y = this.calculateNumberPlusOne(selectedNumber);
  }

  changeSelectedBoolean(selectedBoolean: boolean): void {
    this.z = selectedBoolean;
  }

  calculateNumberPlusOne(selectedNumber: number): number {
    selectedNumber = selectedNumber + 1;
    return selectedNumber;
  }
}
