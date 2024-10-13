import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortname'
})
export class ShortnamePipe implements PipeTransform {

  transform(value: any): any {
    let newVal: any;
    newVal = value ? value.slice(0, 1) : '';
    return newVal.toUpperCase();
  }

}