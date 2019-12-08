import { Component, HostBinding, HostListener } from '@angular/core';

import { AbstractControlComponent } from '../abstract-control-component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [
    '../abstract-control-component.scss',
    './checkbox.component.scss',
  ],
})
export class CheckboxComponent extends AbstractControlComponent<boolean> {
  @HostListener('click')
  toggleCheckbox() {
    if (this.formControl.disabled) {
      return;
    }
    const newValue = !this.formControl.value;
    this.formControl.markAsDirty();
    this.formControl.markAsTouched();
    this.formControl.setValue(newValue);
    this.change.next(newValue);

    console.log('click', this.formControl);
  }

  @HostBinding('class.invalid')
  get isInvalid() {
    return this.formControl.touched && this.formControl.invalid;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.formControl.disabled;
  }

  @HostBinding('class.selected')
  get isSelected() {
    return this.formControl.value === true;
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.isKeyboardPressed(event)) {
      event.preventDefault();
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.isKeyboardPressed(event)) {
      this.toggleCheckbox();
      event.preventDefault();
    }
  }

  isKeyboardPressed(event: KeyboardEvent) {
    return event.key === ' ';
  }
}
