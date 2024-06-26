import { SharedService } from './../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css',
})
export class MoonComponent {
  constructor(public sharedService: SharedService) {}

  moonClick() {
    this.sharedService.setMessage('Good Night!');
  }
}
