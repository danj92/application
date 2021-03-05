import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-timepicker',
  templateUrl: './use-timepicker.component.html',
  styleUrls: ['./use-timepicker.component.scss'],
})
export class UseTimepickerComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      time: ['', [Validators.required]],
      // time: [{ value: '11:55', disabled: true }, [Validators.required]],
    });
  }

  patchSomeValue() {
    this.formGroup.get('time').patchValue('11:22');
  }

  patchEmptyValue() {
    this.formGroup.get('time').patchValue('');
  }

  sendTime() {
    // eslint-disable-next-line no-console
    console.log('TIME', this.formGroup);
  }
}
