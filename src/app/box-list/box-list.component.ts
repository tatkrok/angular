import { Component } from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.css',
})
export class BoxListComponent {
  nameFirstBox: string = 'firstBox';
  nameSecondBox: string = 'secondBox';
  nameThirdBox: string = 'thirdBox';
}
