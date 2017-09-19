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
    private values: Response;
    private anyErrors: boolean;
    private finished: boolean;
    private headers = new Headers({ 'Content-Type': 'application/json', "apikey": 'jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD' }); 
    //private url = 'https://google.com'
    private url = 'http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD&details=true'
    //private options = new RequestOptions({ headers: this.headers });
    public vals: string;

    constructor(public http: Http) {
    }
    /*
    JSON getLocations(string keyword) {
    }
    */

    extractData(response) {
        console.log('Raw response:', response);
        console.log('Formatted response:', response.json());
        const body = response.json();
        return body || { };
    }

    handleData(data) {
        console.log('Here are the usable data', data);
        // Insert Business logic here
      }
    
      handleComplete() {
        console.log('Complete');
      }
    
      handleError(error) {
        console.log('error:', error)
        return Observable.throw(error);
    }

    ngOnInit(): void {
        this.http.get(this.url)
        //this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(this.extractData)
            .subscribe(this.handleData, this.handleError, this.handleComplete);
    }
}