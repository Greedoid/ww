import { Component, OnInit, Pipe } from '@angular/core';
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
    public dayObservable: Observable<Array<WeatherDay>>
    public days: Array<WeatherDay> = [];
    private headers = new Headers({ 'Content-Type': 'application/json', "apikey": 'jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD' }); 
    private url = 'http://dataservice.accuweather.com/currentconditions/v1/348308?apikey=jAV7fJMl2FGrEUIuAAFnu562wjbo8AHD&details=true'
    //private options = new RequestOptions({ headers: this.headers });
    public vals: string;
    private cityMap = {'Chicago' : '348308'}
    private apiKey = 'lyDJABKhfcoAkwR2fK5pYfvPOxkhW4Aq'
    // Will need one for each borough in NYC

    constructor(public http: Http) {
    }

    extractData(response) {
        console.log('Raw response:', response);
        console.log('Formatted response:', response.json());
        const body = response.json();
        return body || { };
    }

    handleData(data) {
        console.log('Here are the usable data', data);
    }
    
    extractDaysMap(response) {
        const data = response.json()
        let currDays = new Array<WeatherDay>()
        data['DailyForecasts'].forEach(element => {
            currDays.push(new WeatherDay(
                element['Day']['IconPhrase'], 
                "",
                element['Date'], 
                element['Day']['IconPhrase'],
                element['Temperature']['Maximum']['Value'],
                element['Temperature']['Minimum']['Value']
            )
        )
        });
        return currDays
    }
    
    extractDays(data) {
        let currDays = new Array<WeatherDay>()
        data['DailyForecasts'].forEach(element => {
            currDays.push(new WeatherDay(
                element['Day']['IconPhrase'], 
                "",
                element['Date'], 
                element['Day']['IconPhrase'],
                element['Temperature']['Maximum']['Value'],
                element['Temperature']['Minimum']['Value']
            )
        )
        });
        this.days = currDays
    }
    
    handleComplete() {
        console.log('Complete');
    }
    
    handleError(error) {
        console.log('error:', error)
        return Observable.throw(error);
    }

    get5DayForecast(locationName) {
        let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + this.cityMap[locationName] + '?apikey=' + this.apiKey
        this.http.get(url)
            .map(this.extractData)
            .subscribe(this.extractDays, this.handleError, this.handleComplete)
    }

    
    get5DayForecastMap(locationName) {
        let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + this.cityMap[locationName] + '?apikey=' + this.apiKey
        this.dayObservable = this.http.get(url)
            .map(this.extractDaysMap)
    }

    getCurrentConditions(locationName){
        let url = 'http://dataservice.accuweather.com/currentconditions/v1/' + this.cityMap[locationName] + '?apikey=' + this.apiKey
        this.http.get(this.url) 
            .map(this.extractData)
            .subscribe(this.handleData, this.handleError, this.handleComplete);
    }

    ngOnInit(): void {
        this.getCurrentConditions("Chicago")
        this.get5DayForecastMap("Chicago")
    }
}

//"{"Headline":{"EffectiveDate":"2017-09-22T02:00:00-05:00","EffectiveEpochDate":1506063600,"Severity":5,"Text":"Fog will affect the area from late tomorrow night to Friday morning","Category":"fog","EndDate":"2017-09-22T14:00:00-05:00","EndEpochDate":1506106800,"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/extended-weather-forecast/348308?lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?lang=en-us"},"DailyForecasts":[{"Date":"2017-09-20T07:00:00-05:00","EpochDate":1505908800,"Temperature":{"Minimum":{"Value":73.0,"Unit":"F","UnitType":18},"Maximum":{"Value":87.0,"Unit":"F","UnitType":18}},"Day":{"Icon":4,"IconPhrase":"Intermittent clouds"},"Night":{"Icon":35,"IconPhrase":"Partly cloudy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=1&lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=1&lang=en-us"},{"Date":"2017-09-21T07:00:00-05:00","EpochDate":1505995200,"Temperature":{"Minimum":{"Value":73.0,"Unit":"F","UnitType":18},"Maximum":{"Value":90.0,"Unit":"F","UnitType":18}},"Day":{"Icon":2,"IconPhrase":"Mostly sunny"},"Night":{"Icon":34,"IconPhrase":"Mostly clear"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=2&lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=2&lang=en-us"},{"Date":"2017-09-22T07:00:00-05:00","EpochDate":1506081600,"Temperature":{"Minimum":{"Value":72.0,"Unit":"F","UnitType":18},"Maximum":{"Value":89.0,"Unit":"F","UnitType":18}},"Day":{"Icon":2,"IconPhrase":"Mostly sunny"},"Night":{"Icon":33,"IconPhrase":"Clear"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=3&lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=3&lang=en-us"},{"Date":"2017-09-23T07:00:00-05:00","EpochDate":1506168000,"Temperature":{"Minimum":{"Value":70.0,"Unit":"F","UnitType":18},"Maximum":{"Value":88.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny"},"Night":{"Icon":33,"IconPhrase":"Clear"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=4&lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=4&lang=en-us"},{"Date":"2017-09-24T07:00:00-05:00","EpochDate":1506254400,"Temperature":{"Minimum":{"Value":69.0,"Unit":"F","UnitType":18},"Maximum":{"Value":87.0,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny"},"Night":{"Icon":33,"IconPhrase":"Clear"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=5&lang=en-us","Link":"http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=5&lang=en-us"}]}"