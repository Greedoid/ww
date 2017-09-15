import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { AppComponent } from './app.component';
import { HttpClient } from "@angular/common/http";
import { MainWeatherComponent } from "./weather/weather.component";

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent
  ],
  imports: [
    BrowserModule
    //FormsModule,
    //HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }