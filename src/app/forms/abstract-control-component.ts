import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostBinding,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { isControlRequired } from './form-helpers';

export class AbstractControlComponent<T> implements OnInit {
  @Input('form') formGroup: FormGroup;

  @Input('control') formControl: FormControl;

  @Input() name = '';

  @Output() blur = new EventEmitter<Event>();

  @Output() focus = new EventEmitter<Event>();

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
    // console.log('Error', this.isTouched, this.isInvalid, this.isFocused)
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
