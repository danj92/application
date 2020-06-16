import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() products;
  isListVisible: any = false;

  value: any;
  propagateChange: any = () => {};

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

  selectProduct(product) {
    this.value = product;
    this.propagateChange(this.value);
  }

  getCssForSelectedProduct(product) {
    return {
      selected: this.value && this.value.name === product.name,
    };
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean): void {}
}
