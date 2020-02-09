import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HomeComponent } from './home/home.component';
import { ItineraryService } from './itinerary.service'

@NgModule({
  declarations: [
    AppComponent,
    ItineraryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItineraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
