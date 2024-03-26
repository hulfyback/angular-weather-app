import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  apiKey: string;
  city: string;
  forecast: Observable<any>;
  readonly rootUrl: string = 'http://api.weatherapi.com/v1/forecast.json';
  
  constructor(private http: HttpClient) {}
  
  getForecast = (city: string, apiKey: string): void => {
    const params = new HttpParams()
      .set('key', apiKey)
      .set('q', city)
      .set('days', 3);
    this.forecast = this.http.get<any>(this.rootUrl, {params: params});
    this.forecast.subscribe((data: any) => {
      console.log(data);
    })
  }

  getAvgValue = (data: any[], property: string, startIndex: number, endIndex: number): number => {
    const temps: number[] = [];
    if (!data) {
      return NaN;
    }
    data.slice(startIndex, endIndex + 1).forEach((data: any )=> {
      temps.push(data[property]);
    })
    const sum = temps.reduce((total: number, num: number) => total + num, 0);
    return Math.round(sum / temps.length);
  }
}
