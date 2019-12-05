import {
  AbstractControl,
  Validators,
} from '@angular/forms';

export function isControlRequired(control: AbstractControl) {
  if (control.validator && control.enabled) {
    const result = control.validator(Validators.required as any);
    return result && result.required;
  }
  return false;
}
