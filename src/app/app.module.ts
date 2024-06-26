import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainContentComponent } from './ui/main-content/main-content.component';
import { BoxComponent } from './box/box.component';
import { BoxListComponent } from './box-list/box-list.component';
import { PlanetComponent } from './planet/planet.component';
import { SpaceComponent } from './space/space.component';
import { MeteoriteComponent } from './meteorite/meteorite.component';
import { SunComponent } from './sun/sun.component';
import { MoonComponent } from './moon/moon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    BoxComponent,
    BoxListComponent,
    PlanetComponent,
    SpaceComponent,
    MeteoriteComponent,
    SunComponent,
    MoonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
