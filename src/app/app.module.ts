import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JsonPipe } from '@angular/common';
import { HttpModule } from "@angular/http";
import { MainWeatherComponent } from "./weather/weather.component";
import { DayOfWeekPipe } from "./shared/dayOfWeek.pipe"
//import { Button } from "./shared/buttons.component"

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent,
    DayOfWeekPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }