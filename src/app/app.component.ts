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
  // boxesNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // boxesStrings: string[] = ['cat', 'dog', 'elephant'];
  // boxesBoolean: boolean[] = [true, false, true];
  // boxes: (string | number)[] = [1, 'cat'];
  // boxesMix: (string | number | boolean)[] = [1, 'cat', true];
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

  numbers2: number[] = [1, 2, 3, 4, 5, 6];

  boxes: any[] = [
    {
      content: 'Box 1 content',
      subtitle: 'Box 1 subtitle',
      visible: true,
    },
    {
      content: 'Box 2 content',
      subtitle: 'Box 2 subtitle',
      visible: false,
    },
    {
      content: 'Box 3 content',
      subtitle: 'Box 3 subtitle',
      visible: true,
    },
  ];

  circles: any[] = [
    {
      main: 'circle 1 main',
      subs: 'circle 1 subs',
      visible: true,
    },
    {
      main: 'circle 2 main',
      subs: 'circle 2 subs',
      visible: false,
    },
    {
      main: 'circle 3 main',
      subs: 'circle 3 subs',
      visible: true,
    },
  ];

  triangles: any[] = [
    {
      menu: 'triangle 1 menu',
      subtitles: 'triangle 1 subtitles',
      visible: true,
    },
    {
      menu: 'triangle  2 main',
      subtitles: 'triangle  2 subtitles',
      visible: false,
    },
    {
      menu: 'triangle 3 main',
      subtitles: 'triangle 3 subtitles',
      visible: true,
    },
  ];

  constructor() {
    console.log(this.numbers2[1]);
    console.log(this.boxes); // array
    console.log(this.boxes[0]); // object
    console.log(this.boxes[0].content); // string
    this.print();
  }

  print() {
    console.log(this.x);
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

  receiveMenuFromChild(menu: any) {
    console.log('menu received from child', menu);
  }

  receiveSubtitlesFromChild(subtitles: any) {
    console.log('subtitles received from child', subtitles);
  }
}
