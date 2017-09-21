import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dayOfWeek'})
export class DayOfWeekPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
    if (!value && value != 0) return value;

    let dayArray: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    console.log("Inside day of week pipe")
    console.log(dayArray)
    console.log(value)

    return dayArray[value]
  }
}