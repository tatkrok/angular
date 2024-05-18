import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedMenuSubject: BehaviorSubject<string> = new BehaviorSubject('Home');
  selectedMenu$: Observable<string> = this.selectedMenuSubject.asObservable();

  changeSelectedMenu(selectedMenu: string): void {
    this.selectedMenuSubject.next(selectedMenu);
  }

}
