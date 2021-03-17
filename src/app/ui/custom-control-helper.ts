import { AbstractControl, Validators } from '@angular/forms';

export function isControlRequired(control: AbstractControl) {
  if (!!control.validator) {
    const result = control.validator(Validators.required as any);
    return result && result.required;
  }
  return false;
}

export function isDisabled(control: AbstractControl) {
  console.log('!!', control);
}
