import { Injectable } from '@angular/core';
@Injectable()
export class ValidationMessages {
  required() {
    return 'This field is required.';
  }

  min(data: { min: number }) {
    return `No less than ${data.min}`;
  }

  email() {
    return 'Incorrect email address.';
  }

  minlength(data: { actualLength: number; requiredLength: number }) {
    return `Required at least ${data.requiredLength}, but given ${data.actualLength}`;
  }

  maxlength(data: { actualLength: number; requiredLength: number }) {
    return `No more than ${data.requiredLength}, but given ${data.actualLength}`;
  }

  true() {
    return 'Required True';
  }
}
