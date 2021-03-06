import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake/weather.service.fake.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useclass: WeatherServiceFake }],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  // it(`should have as title 'local-weather-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app.title).toEqual('local-weather-app')
  // })

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Local Cast Westher!')
  })
})
