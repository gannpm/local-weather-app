// import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../../interfaces'
import { IWeatherService } from '../weather.service'
import { Observable, of } from 'rxjs'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  constructor(public fakeWeather1: ICurrentWeather) {
    this.fakeWeather = {
      city: 'Bursa',
      country: 'TR',
      date: 1485789600,
      image: '',
      temperature: 280.32,
      description: 'light intensity drizzle',
    }
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    console.log('fakeWeather: ' + this.fakeWeather.city)
    return of(this.fakeWeather)
  }
}
