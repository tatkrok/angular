import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'angular';
  day: string = 'Sunday';
  dayStatus2: string = 'Kalimera';

  constructor() {
    // console.log('constructor App component called');
  }

  ngOnInit(): void {
    // console.log('ngOnInit App component called');
  }
  // Lifecycle hooks
  // OnInit(), OnChanges(), AfterViewInit(), OnDestroy()

  changeDay(day: string): void {
    this.day = day;
  }

  changeDayStatus(dayStatus: string): void {
    this.dayStatus2 = dayStatus;
  }
}
