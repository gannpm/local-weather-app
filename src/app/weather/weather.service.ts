import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ICurrentWeatherData, ICurrentWeather } from '../Interfaces'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  private cwData: Observable<ICurrentWeatherData>
  private cwData2: Observable<ICurrentWeather>
  private iCW: ICurrentWeather

  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `q=${city}, ${country}&appid=${environment.appId} `
      )
      .pipe(map(d => this.transformToICurrentWeather(d)))

    console.log(
      'Path: ' +
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
        `q=${city},${country}&appid=${environment.appId}`
    )
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    // the return type is ICurrentWeather. The "data" is implicitly assigned
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}
