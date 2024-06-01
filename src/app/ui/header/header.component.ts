import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges {
  @Input() day: string;
  @Input() dayStatus: string;
  x: string = 'Home';
  i: string = 'Home';
  y: number = 1;
  z: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.day === 'Saturday') {
      console.log('Op, exeis mathima 11-1.');
    }
    if (this.dayStatus === 'Kalinyxta') {
      console.log('ora gia ypno');
    }
  }

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
