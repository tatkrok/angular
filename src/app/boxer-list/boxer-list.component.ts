import { Component } from '@angular/core';
import { Boxers } from './boxer-list.interface';

@Component({
  selector: 'app-boxer-list',
  templateUrl: './boxer-list.component.html',
  styleUrl: './boxer-list.component.css',
})
export class BoxerListComponent {
  boxers: Boxers[] = [
    {
      main: 'main',
      subs: 'subs',
    },
  ];
  boxerSubsEvent: any;
  boxerMainEvent: any;

  receiveMainFromChild(main: string) {
    console.log('main recieve', main);
  }
  receiveSubsFromChild(subs: string) {
    console.log('subs recieve', subs);
  }
}
