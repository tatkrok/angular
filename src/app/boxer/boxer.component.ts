import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-boxer',
  templateUrl: './boxer.component.html',
  styleUrl: './boxer.component.css',
})
export class BoxerComponent {
  title: string;
  @Input() main: string;
  @Input() subs: string;

  @Output() boxerMainEvent = new EventEmitter();
  @Output() boxerSubsEvent = new EventEmitter();

  sendMainToParent() {
    this.boxerMainEvent.emit(this.main);
  }
  sendSubsToParent() {
    this.boxerSubsEvent.emit(this.subs);
  }

  onBoxerClick() {
    this.sendMainToParent();
    this.sendSubsToParent();
  }
}
