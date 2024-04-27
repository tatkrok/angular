import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';

  receiveContentFromChild(content: any) {
    console.log('Content received from child:', content);
  }

  receiveSubtitleFromChild(subtitle: any) {
    console.log('Subtitle received from child:', subtitle);
  }
}
