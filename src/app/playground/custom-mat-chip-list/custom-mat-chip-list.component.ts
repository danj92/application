import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-custom-mat-chip-list',
  templateUrl: './custom-mat-chip-list.component.html',
  styleUrls: ['./custom-mat-chip-list.component.scss'],
  providers: [     
  {       provide: NG_VALUE_ACCESSOR, 
          useExisting: forwardRef(() => CustomMatChipListComponent),
          multi: true     
  }]
})
export class CustomMatChipListComponent implements ControlValueAccessor {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  onChange: any = () => {}
  onTouch: any = () => {}
  isDisabled: boolean = false;

  constructor() {}

  writeValue(fruits: Fruit[]): void {
    this.fruits = fruits;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    this.onChange(this.fruits);

    // Clear the input value
    // event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }

    this.onChange(this.fruits);
  }
}
