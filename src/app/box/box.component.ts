import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent implements OnInit, OnChanges {
  @Input() content: number | string = '';
  @Input() subtitle: string = '';
  @Input() triggedBox: string = '1';
  @Input() triggedBox2: string = '1';
  title: string = 'box';

  @Output() boxContentEvent = new EventEmitter<number | string>();
  @Output() boxSubtitleEvent = new EventEmitter<string>();

  constructor() {
    console.log('constructor: Hello')
  }

  ngOnInit(): void {
    // console.log('ngOnInit: Hello')
    console.log('ngOnInit: KALESTIKE')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['content']) {
    //   console.log('allaxe to content')
    // }
    console.log('ngOnChanges: KALESTIKE')

  }

  sendContentToParent() {
    this.boxContentEvent.emit(this.content);
  }

  sendSubtitleToParent() {
    this.boxSubtitleEvent.emit(this.subtitle);
  }

  onBoxClick() {
    this.sendContentToParent();
    this.sendSubtitleToParent();
  }
}
