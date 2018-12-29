import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WeatherServiceFake } from './weather.service.fake.component'

describe('Weather.Service.FakeComponent', () => {
  let component: WeatherServiceFake
  let fixture: ComponentFixture<WeatherServiceFake>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherServiceFake],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherServiceFake)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
