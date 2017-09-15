import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { WeatherDay, WeatherWidget } from "./weather";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import {HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'wwidget',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class MainWeatherComponent implements OnInit 
{
    private data: Observable<Array<number>>;
    private values: Array<number> = [];
    private anyErrors: boolean;
    private finished: boolean;
    private headers = new Headers({ 'Content-Type': 'application/json', "apikey": 'jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD' }); // ... Set content type to JSON
    private options = new RequestOptions({ headers: this.headers });

    constructor() {
    }

    ngOnInit(): void {
        this.data = new Observable(observer => {
            // Calls the onNext() function in the observer
            observer.next([20]);
            // Calls the onComplete() function in the observer
            //this.result = this.http.get('http://dataservice.accuweather.com/locations/v1/regions')
            observer.complete();
            // Executed when there are no more subscribers
            return () => {
              console.log('no more subscribers');
            };
          });
           
          // Subscribe to the observable
          let subscription = this.data.subscribe(
            // onNext() function
            value => console.log('value is ' + value),
            // onError() function
            error => console.log('error is ' + error),
            // onComplete() function
            () => console.log('completed')
          );
        //this.toggleImage()
    }
}