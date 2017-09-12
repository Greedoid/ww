export interface IWeatherDay {
    name: string;
    icon: string; 
    temp: number;
}

export interface IWeatherWidget {
    tempScale: string;
    location: string;
    currTemp: number;
    weatherDays: IWeatherDay[];
    weatherDaysNum: number;
    tempDict:;
    iconDict;
}