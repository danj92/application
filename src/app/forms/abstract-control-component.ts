import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostBinding,
  Directive,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { isControlRequired } from '../ui/custom-control-helper';

@Directive()
export class AbstractControlDirective<T> implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('form') formGroup: FormGroup;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('control') formControl: FormControl;

  @Input() name = '';

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<Event>();

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() focus = new EventEmitter<Event>();

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change = new EventEmitter<T>();

  @HostBinding('class.focused')
  isFocused = false;

  ngOnInit() {
    if (!this.formControl) {
      this.formControl = this.formGroup.controls[this.name] as FormControl;
      if (!this.formControl) {
        console.error(`Unknown field: ${this.name}`);
      }
    }
  }

  @HostBinding('class.invalid')
  get isInvalid() {
    return this.formControl.invalid;
  }

  @HostBinding('class.touched')
  get isTouched() {
    return this.formControl.touched;
  }

  @HostBinding('class.filled')
  get isFilled() {
    return !!this.formControl.value;
  }

  @HostBinding('class.required')
  get isRequired() {
    return isControlRequired(this.formControl);
  }

  get isErrorVisible() {
    return this.isTouched && this.isInvalid && this.isFocused;
  }

  emitFocus(event: Event) {
    if (!this.isFocused) {
      this.isFocused = true;
      this.focus.next(event);
    }
  }

  emitBlur(event: Event) {
    if (this.isFocused) {
      this.isFocused = false;
      this.blur.next(event);
    }
  }
}
