export class ValidationMessages {

  constructor() { }

  required() {
    return 'To pole jest wymagane.';
  }

  min() {
    return 'No less than 250 000';
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
