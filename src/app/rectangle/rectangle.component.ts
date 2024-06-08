import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.css',
})
export class RectangleComponent {
  title: string = 'rectangle';
  @Input() main: string;
  @Input() subs: string;

  @Output() rectangleMainEvent = new EventEmitter<string>();
  @Output() rectangleSubsEvent = new EventEmitter<string>();

  sendMainEventToParent() {
    this.rectangleMainEvent.emit(this.main);
  }

  sendSubsEventToParent() {
    this.rectangleSubsEvent.emit(this.subs);
  }

  onRectangleClick() {
    this.sendMainEventToParent();
    this.sendSubsEventToParent();
  }
}
