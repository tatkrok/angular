import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { CircleListComponent } from './circle-list/circle-list.component';
import { BoxListComponent } from './box-list/box-list.component';
import { TriangleListComponent } from './triangle-list/triangle-list.component';

@NgModule({
  declarations: [AppComponent, BoxComponent, CircleComponent, TriangleComponent, CircleListComponent, BoxListComponent, TriangleListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
