import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css',
})
export class CircleComponent {
  @Input() main: string;
  @Input() subs: string;
  @Input() animal: string;
  title: string = 'circle';

  @Output() CircleMainEvent = new EventEmitter<string>();
  @Output() CircleSubsEvent = new EventEmitter<string>();

  sendMainToParent() {
    this.CircleMainEvent.emit(this.main);
  }

  sendSubtitleToParent() {
    this.CircleSubsEvent.emit(this.subs);
  }

  onCircleClick() {
    this.sendMainToParent();
    this.sendSubtitleToParent();
  }
}
