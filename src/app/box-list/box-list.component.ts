import { Component } from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.css',
})
export class BoxListComponent {
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

  receiveContentFromChild(content: any) {
    console.log('Content received from child', content);
  }

  receiveSubtitleFromChild(subtitle: any) {
    console.log('Subtitle received from child', subtitle);
  }
}
