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

  FirstVersion: number = 1;
  isFirst: boolean = true;
  circlesNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  circlesStrings: string[] = ['car', 'aeroplane', 'boat'];
  circlesBoolean: boolean[] = [true, false, true];
  circles: (string | number)[] = [1, 'car'];
  circlesMix: (string | number | boolean)[] = [1, 'car', true];

  x: any = {
    a: 'cat',
    b: 'dog',
    c: 'elephant',
    d: 1,
    e: 2,
    f: true,
    g: false,
    a1: 1,
    a2: 'oti thelw',
    a3: 'oti thelw',
  };

  y: any = {
    a: 'car',
    b: 'aeroplane',
    c: 'boat',
    d: 1,
    e: 2,
    f: true,
    g: false,
    a1: 1,
    a2: 'trip',
    a3: 'trip',
  };

  constructor() {
    this.print();
    this.printAgain();
  }

  print() {
    console.log(this.x);
    console.log(this.boxesMix);
    console.log(this.y['c']);
  }

  printAgain() {
    console.log(this.y);
    console.log(this.circlesMix);
    console.log(this.y['a']);
    console.log(this.x['c']);
    console.log(this.circlesNumbers);
  }

  receiveContentFromChild(content: any) {
    console.log('Content received from child', content);
  }

  receiveSubtitleFromChild(subtitle: any) {
    console.log('Subtitle received from child', subtitle);
  }

  receiveMainFromChild(main: any) {
    console.log('main received from child', main);
  }

  receiveSubsFromChild(subs: any) {
    console.log('subs received from child', subs);
  }
}
