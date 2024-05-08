import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular';

  numbersArray: number[] = [1, 2, 3];

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

  receiveMenuFromChild(menu: any) {
    console.log('menu received from child', menu);
    this.printArrayElements();
  }

  receiveSubtitlesFromChild(subtitles: any) {
    console.log('subtitles received from child', subtitles);
    this.printArrayFirstElement();
  }

  printArrayElements() {
    this.numbersArray.forEach((number) => {
      console.log(number)
    });
  }

  printArrayFirstElement() {
    console.log(this.numbersArray[0]);
  }

}
