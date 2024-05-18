import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedMenuNameSubject: BehaviorSubject<string> = new BehaviorSubject('Home');
  selectedMenuName$: Observable<string> = this.selectedMenuNameSubject.asObservable();

  changeSelectedMenu(selectedMenuName: string): void {
    this.selectedMenuNameSubject.next(selectedMenuName);
  }

}
