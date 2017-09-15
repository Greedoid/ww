export class WeatherDay {
    constructor(
        public name: string,
        public icon: string, 
        public temp: number
    ) {}
}

export class WeatherWidget {
    constructor (
        tempScale: string,
        location: string,
        currTemp: number,
        weatherDays: WeatherDay[],
        weatherDaysNum: number,
    ) {}
//    tempDict:;
 //   iconDict:;
}