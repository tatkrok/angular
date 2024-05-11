import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrl: './circle-list.component.css',
})
export class CircleListComponent {
  @Input() firstName: string = 'Tatiana';
  @Input() lastName: string = 'Tsiouka';
  @Input() animal: string;
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

  receiveMainFromChild(main: any) {
    console.log('main received from child', main);
  }

  receiveSubsFromChild(subs: any) {
    console.log('subs received from child', subs);
  }
}
