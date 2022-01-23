import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number): any {
    let credit = value.toString();
    let num: any;
    num =
    `${credit.substring(0, 4)}-${credit.substring(4, 8)}-${credit.substring(8, 12)}`;
    return num;
} }
