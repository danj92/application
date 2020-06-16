import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface SelectOption {
  title: string;
  value: string;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  // @Input() products;
  @Input() options: SelectOption[] = [];

  isListVisible: any = false;

  value: any;

  private onChange = (value: any) => {};
  private onTouched = () => {};
  // propagateChange: any = () => {};

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

  selectOption(option) {
    this.value = option;
    // this.propagateChange(this.value);
    this.onChange(this.value);
  }

  // getCssForSelectedOption(option) {
  //   return {
  //     selected: this.value && this.value.title === option.title,
  //   };
  // }

  isSelected(option) {
    return this.value && this.value.title === option.title;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    // this.propagateChange = fn;
    this.onChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean): void {}
}
