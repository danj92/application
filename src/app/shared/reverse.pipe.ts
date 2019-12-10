import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value) {
    if (!value) {
      return;
    }

    value.filter(val => val.dismissed === false);
    const reverseArr = value.reverse();
    return reverseArr;
  }
}
