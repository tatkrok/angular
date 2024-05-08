import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css',
})
export class TriangleComponent {
  onTriangleClick() {
    throw new Error('Method not implemented.');
  }
  @Input() menu: string;
  @Input() subtitles: string;

  title: string = 'triangle';

  @Output() TriangleMenuEvent = new EventEmitter<string>();
  @Output() TriangleSubtitlesEvent = new EventEmitter<string>();

  sendContentToParent() {
    this.TriangleMenuEvent.emit(this.menu);
  }

  sendSubtitleToParent() {
    this.TriangleSubtitlesEvent.emit(this.subtitles);
  }

  onTriangleClic() {
    this.sendMenuToParent();
    this.sendSubtitlesToParent();
  }
  sendMenuToParent() {
    throw new Error('Method not implemented.');
  }
  sendSubtitlesToParent() {
    throw new Error('Method not implemented.');
  }
}
