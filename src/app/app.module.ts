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
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainContentComponent } from './ui/main-content/main-content.component';
import { IntroductionComponent } from './ui/main-content/introduction/introduction.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RectangleListComponent } from './rectangle-list/rectangle-list.component';
import { BoxerComponent } from './boxer/boxer.component';
import { BoxerListComponent } from './boxer-list/boxer-list.component';
import { SpaceComponent } from './space/space.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CircleComponent,
    TriangleComponent,
    CircleListComponent,
    BoxListComponent,
    TriangleListComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    IntroductionComponent,
    RectangleComponent,
    RectangleListComponent,
    BoxerComponent,
    BoxerListComponent,
    SpaceComponent,
    PlanetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
