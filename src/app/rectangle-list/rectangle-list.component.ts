import { Component } from '@angular/core';
import { Rectangles } from './rectangles.interface';

@Component({
  selector: 'app-rectangle-list',
  templateUrl: './rectangle-list.component.html',
  styleUrl: './rectangle-list.component.css',
})
export class RectangleListComponent {
  rectangles: Rectangles[] = [
    {
      main: 'rectangle 1 main',
      subs: 'rectangle 1 subs',
      visible: true,
    },
    {
      main: 'rectangle 2 main',
      subs: 'rectangle 2 subs',
      visible: true,
    },
    {
      main: 'rectangle 3 main',
      subs: 'rectangle 3 subs',
      visible: true,
    },
  ];

  recieveMainEventFromChild(main: string): void {
    console.log('main recieve from child', main);
  }

  recieveSubsEventFromChild(subs: string): void {
    console.log('subs recieve from child', subs);
  }
}
