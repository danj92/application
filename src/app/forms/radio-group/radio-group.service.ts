import { EventEmitter, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RadioOption } from './radio-option.interface';

@Injectable()
export class RadioGroupService {
  initialValue: string;

  formControl: FormControl;

  change = new EventEmitter<string>();

  options: RadioOption[] = [];

  addOption(option: RadioOption) {
    this.options.push(option);
    if (this.initialValue === option.value) {
      option.isSelected = true;
    }
  }

  select(optionToSelect: RadioOption) {
    this.options.forEach(option => (option.isSelected = false));
    optionToSelect.isSelected = true;
    if (this.formControl) {
      this.formControl.markAsDirty();
      this.formControl.setValue(optionToSelect.value);
    }
    this.change.next(optionToSelect.value);
  }
}
