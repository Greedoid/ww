export class WeatherDay {
    constructor(
        public name?: string,
        public iconLink?: string, 
        public date?: string,
        public condition?: string, 
        public tempHigh?: number,
        public tempLow?: number
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