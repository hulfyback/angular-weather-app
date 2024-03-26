import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component'
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyWeatherComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
