import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  @Input() content: number | string = '';
  @Input() subtitle: string = '';

  title: string = 'box';

  @Output() boxContentEvent = new EventEmitter<any>();
  @Output() boxSubtitleEvent = new EventEmitter<any>();

  sendContentToParent() {
    this.boxContentEvent.emit(this.content);
  }

  sendSubtitleToParent() {
    this.boxSubtitleEvent.emit(this.content);
  }

  onBoxClick() {
    this.sendContentToParent();
    this.sendSubtitleToParent();
  }
}
