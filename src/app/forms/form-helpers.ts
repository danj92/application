import { AbstractControl, Validators, FormGroup } from '@angular/forms';

export interface SubmitFormOptions {
  // Defines element for which we search for invalid inputs in
  // markFirstInvalidElement. Useful when there's many forms in one view and we
  // want to invalidate only one of them.
  parentElement?: ParentNode;
}

export function isControlRequired(control: AbstractControl) {
  if (control.validator && control.enabled) {
    const result = control.validator(Validators.required as any);
    return result && result.required;
  }
  return false;
}

export async function wrapApiFormPost<T>(
  formGroup: FormGroup,
  callback: () => Promise<T>,
  options: SubmitFormOptions = {},
): Promise<T> {
  if (formGroup.invalid) {
    formGroup.markAllAsTouched();
    markFirstInvalidElement(options.parentElement);
  }
  try {
    return await callback();
  } catch (e) {
    throw e;
  }
}

export function markFirstInvalidElement(parentElement?: ParentNode) {
  parentElement = parentElement || document;
  const selector = 'form .ng-invalid';
  const el = parentElement.querySelector<HTMLElement>(selector);
  if (el) {
    el.scrollIntoView({ block: 'center' });
    el.classList.remove('blink');
    el.focus();
    el.classList.add('blink');
  }
}
