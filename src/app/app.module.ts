import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake/weather.service.fake.component'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent], // , Weather.Service.FakeComponent
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    WeatherService,
    // WeatherServiceFake
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://waffle.io/gannpm/local-weather-app
