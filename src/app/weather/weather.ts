export class WeatherDay {
    constructor(
        public name?: string,
        public iconLink?: string, 
        public date?: number,
        public condition?: string, 
        public displayHigh?: number,
        public displayLow?: number,
        public fahrHigh?: number,
        public fahrLow?: number,
        public celsiusHigh?: number,
        public celsiusLow?: number
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