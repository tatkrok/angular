import { SharedService } from '../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrl: './sun.component.css',
})
export class SunComponent {
  constructor(public sharedService: SharedService) {}

  onSunClick(): void {
    this.sharedService.sayHello();
    this.sharedService.setMessage('Good Morning!');
  }
}
