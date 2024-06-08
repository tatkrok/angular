import { Component, OnInit } from '@angular/core';
import { Boxes } from './box-list.interface';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.css',
})
export class BoxListComponent {
  clickedBoxContent: string;

  boxes: Boxes[] = [
    {
      content: 'Box 1 content',
      subtitle: 'Box 1 subtitle',
      visible: true,
    },
    {
      content: 'Box 2 content',
      subtitle: 'Box 2 subtitle',
      visible: true,
    },
    {
      content: 'Box 3 content',
      subtitle: 'Box 3 subtitle',
      visible: true,
    },
  ];

  boxClicked(box: any) {
    this.clickedBoxContent = box.content;
    // setTimeout(() => {
    //   this.clickedBoxContent = 'Ciao'
    // }, 3000);
  }

  receiveContentFromChild(content: any) {
    console.log('Content received from child', content);
  }

  receiveSubtitleFromChild(subtitle: any) {
    console.log('Subtitle received from child', subtitle);
  }
}
