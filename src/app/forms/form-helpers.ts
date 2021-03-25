import { FormGroup } from '@angular/forms';

export interface SubmitFormOptions {
  // Defines element for which we search for invalid inputs in
  // markFirstInvalidElement. Useful when there's many forms in one view and we
  // want to invalidate only one of them.
  parentElement?: ParentNode;
}

// export class FormValidationError extends Error {
//   constructor(m = '') {
//     super(m);
//     Object.setPrototypeOf(this, FormValidationError.prototype);
//   }
// }

export async function wrapApiFormPost<T>(
  formGroup: FormGroup,
  callback: () => Promise<T>,
  options: SubmitFormOptions = {},
): Promise<T> {
  if (formGroup.invalid) {
    formGroup.markAllAsTouched();
    markFirstInvalidElement(options.parentElement);
    // throw new FormValidationError();
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
  console.log('el', el);
  if (el) {
    el.scrollIntoView({ block: 'center' });
    el.classList.remove('blink');
    el.focus();
    el.classList.add('blink');
  }
}
