import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-use-radio',
  templateUrl: './use-radio.component.html',
  styleUrls: ['./use-radio.component.scss'],
})
export class UseRadioComponent implements OnInit {
  label = 'Select a radio button:';

  items1 = [
    { name: 'radio 1', value: 'radio1' },
    { name: 'radio 2', value: 'radio2' },
  ];

  items2 = [
    { name: 'Form Control 1', value: 'formControl1' },
    { name: 'Form Control 2', value: 'formControl2' },
  ];

  items3 = [
    { name: 'Form Control name 1', value: 'formControlName1' },
    { name: 'Form Control name 2', value: 'formControlName2' },
    { name: 'Form Control name 3', value: 'formControlName3' },
  ];

  formGroup: FormGroup;

  secondFormGroup: FormGroup;

  oldFormGroup: FormGroup;

  itemsFormControl = new FormControl({ value: 'formControl2', disabled: true });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['radio2'],
    });

    this.secondFormGroup = this.fb.group({
      lastname: ['formControlName3'],
    });

    this.oldFormGroup = this.fb.group({
      myRadio: ['oldRadio2'],
    });
  }
}
