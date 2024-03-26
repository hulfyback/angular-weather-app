import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css'
})
export class DailyWeatherComponent {
  @Input() tempMorning: number;
  @Input() perceivedTempMorning: number;
  @Input() tempAfternoon: number;
  @Input() perceivedTempAfternoon: number;
  @Input() tempEvening: number;
  @Input() perceivedTempEvening: number;
  @Input() tempNight: number;
  @Input() perceivedTempNight: number;
  @Input() windMorning: number;
  @Input() windAfternoon: number;
  @Input() windEvening: number;
  @Input() windNight: number;
  @Input() chanceOfRainMorning: number;
  @Input() chanceOfRainAfternoon: number;
  @Input() chanceOfRainEvening: number;
  @Input() chanceOfRainNight: number;
}
