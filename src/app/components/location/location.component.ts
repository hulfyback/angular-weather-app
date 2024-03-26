import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input() city: string;
  @Input() region: string;
  @Input() country: string;
  @Input() timeZone: string;
  @Input() currentTemp: number;
  @Input() windDirection: number;
}
