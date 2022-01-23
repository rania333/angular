import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPope'
})
export class CustomPopePipe implements PipeTransform {
//29906015986325 -> 01-06-1999
  transform(value: number, param: string): number {
    let idNum = value.toString();
    let year: any;
    if(param == 'FullDate') {
      year = `${idNum[5]}${idNum[6]}-${idNum[3]}${idNum[4]}-19${idNum[2]}${idNum[1]}`
    }
    console.log(idNum);
    return year;
  }

}
