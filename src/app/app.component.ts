import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular';

  version: number = 1;
  isNew: boolean = true;
  boxesNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  boxesStrings: string[] = ['cat', 'dog', 'elephant'];
  boxesBoolean: boolean[] = [true, false, true];
  boxes: (string | number)[] = [1, 'cat'];
  boxesMix: (string | number | boolean)[] = [1, 'cat', true];

  x: object = {
    a: 'cat',
    b: 'dog',
    c: 'elephant',
    d: 1,
    e: 2,
    f: true,
    g: false,
    a1: 1,
    a2: 'oti thelw',
    a3: 'oti thelw'
  };

  constructor() {
    this.print();
  }

  print() {
    console.log(this.x);
    console.log(this.boxesMix);
  }

  receiveContentFromChild(content: any) {
    console.log('Content received from child:', content);
  }

  receiveSubtitleFromChild(subtitle: any) {
    console.log('Subtitle received from child:', subtitle);
  }
}
