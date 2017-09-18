import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { WeatherDay, WeatherWidget } from "./weather";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Component({
    selector: 'wwidget',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class MainWeatherComponent implements OnInit 
{
    private data: Observable<Response>;
    private values: string;
    private anyErrors: boolean;
    private finished: boolean;
    //private headers = new Headers({ 'Content-Type': 'application/json', "apikey": 'jAV7fJMl2FGrEUIuAAFnu562wjbo8AHG' }); 
    private url = 'http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD&details=true'
    //private options = new RequestOptions({ headers: this.headers });
    public vals: string;

    constructor(public http: Http) {
    }
    /*
    JSON getLocations(string keyword) {
    }
    */

    ngOnInit(): void {
        this.data = new Observable(observer => {
            // Calls the onNext() function in the observer
            let currString = this.http.get(this.url);
            //console.log(currString);
            //console.log(currString.map((res:Response) => res.json().data));
            let resp = currString.map((res:Response) => res.json)
            observer.next(currString.map((res:Response) => res.json))
            observer.next(resp);
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
            value => console.log(value),
            // onError() function
            error => console.log('error is ' + error),
            // onComplete() function
            () => console.log('completed')
          );
        //this.toggleImage()
    }
}