export class ValidationMessages {

  constructor() { }

  required() {
    return 'To pole jest wymagane.';
  }

  min(data: { min: number }) {
    return `No less than ${data.min}`;
  }

  email() {
    return 'Niepoprawny adres email.';
  }

  minlength(data: { actualLength: number, requiredLength: number }) {
    return `Wymagane co najmniej ${data.requiredLength}, podano ${data.actualLength}`;
  }

  true() {
    return 'required True';
  }
}
