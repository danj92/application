import { Pipe, PipeTransform } from '@angular/core';
// import { filter, reverse } from 'lodash';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value) {
    console.log('!!', value);
    if (!value) {
      return;
    }

    value.filter(val => val.dismissed === false);
    const reverseArr = value.reverse();
    return reverseArr;
  }
}
