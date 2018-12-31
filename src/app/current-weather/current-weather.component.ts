import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../Interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    // image: 'assets/img/sunny.svg',  temperature: 72,  description: 'sunny',
    // this.current = {
    //   city: '',
    //   country: '',
    //   date: 0,
    //   image: '',
    //   temperature: 0,
    //   description: ''
    // }
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('St. Louis', 'US').subscribe(data => {
      (this.current = data), console.log('Inside ngOnInit.current-weather.component')
      console.log('Current City: ' + this.current.city)
      console.log('Current Description: ' + data.description)
    })

    // this following fails outside the subscribe method
    // console.log('inside current-weather.component - this.current: ' + this.current.city)
    // console.log(this.weatherService.getCurrentWeather('Bethesda', 'US'))
  }
}
