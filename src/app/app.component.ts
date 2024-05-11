import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular';
  animal: string = 'cat';

  numbersArray: number[] = [1, 2, 3];

  changeAnimal(animal: string): void {
    this.animal = animal;
  }

}
