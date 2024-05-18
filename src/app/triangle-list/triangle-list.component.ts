import { Component } from '@angular/core';

@Component({
  selector: 'app-triangle-list',
  templateUrl: './triangle-list.component.html',
  styleUrl: './triangle-list.component.css',
})
export class TriangleListComponent {
  triangles: any[] = [
    {
      menu: 'triangle 1 menu',
      subtitles: 'triangle 1 subtitles',
      visible: true,
    },
    {
      menu: 'triangle  2 main',
      subtitles: 'triangle  2 subtitles',
      visible: true,
    },
    {
      menu: 'triangle 3 main',
      subtitles: 'triangle 3 subtitles',
      visible: true,
    },
  ];
  receiveMenuFromChild(menu: any) {
    console.log('menu received from child', menu);
  }

  receiveSubtitlesFromChild(subtitles: any) {
    console.log('subtitles received from child', subtitles);
  }
}
