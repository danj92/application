import { Component, HostBinding, ViewChild, HostListener } from '@angular/core';

import { AbstractControlComponent } from '../abstract-control-component';
import { CheckboxState } from './checkbox-state.enum';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends AbstractControlComponent<boolean> {
  // @ViewChild('checkbox', { static: true }) checkbox: RawCheckboxComponent;

  // ICONS_MAP = {
  //   [CheckboxState.checked]: 'checked',
  //   [CheckboxState.indeterministic]: 'square',
  //   [CheckboxState.unchecked]: '',
  // };

  // get state() {
  //   return this.formControl.value
  //     ? CheckboxState.checked
  //     : CheckboxState.unchecked;
  // }




  // toggleCheckbox() {
  //   if (this.formControl.disabled) {
  //     return;
  //   }
  //   // this.checkbox.checkboxRef.nativeElement.focus();
  //   const newValue = !this.formControl.value;
  //   this.formControl.markAsDirty();
  //   this.formControl.markAsTouched();
  //   this.formControl.setValue(newValue);
  //   this.change.next(newValue);
  // }


  @HostListener('click')
  toggleCheckbox() {
    if (this.formControl.disabled) {
      return;
    }
    // this.checkbox.checkboxRef.nativeElement.focus();
    const newValue = !this.formControl.value;
    this.formControl.markAsDirty();
    this.formControl.markAsTouched();
    this.formControl.setValue(newValue);
    this.change.next(newValue);
  }

  @HostBinding('class.invalid')
  get isInvalid() {
    return this.formControl.touched && this.formControl.invalid;
  }

  // get bleInvalid() {
  //   return this.isInvalid && this.isTouched;
  // }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.formControl.disabled;
  }


  // onKeyDown(event: KeyboardEvent) {
  //   if (this.isKeyboardPressed(event)) {
  //     event.preventDefault();
  //   }
  // }

  // onKeyUp(event: KeyboardEvent) {
  //   if (this.isKeyboardPressed(event)) {
  //     this.toggleCheckbox();
  //     event.preventDefault();
  //   }
  // }

  // isKeyboardPressed(event: KeyboardEvent) {
  //   return event.key === ' ';
  // }
}
