import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-custom-select',
  templateUrl: './use-custom-select.component.html',
  styleUrls: ['./use-custom-select.component.scss'],
})
export class UseCustomSelectComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  checkForm() {
    // eslint-disable-next-line no-console
    console.log('Value', this.formGroup);
  }

  sendNull() {
    this.formGroup.get('name').patchValue('');
  }

  sendNewValue() {
    this.formGroup.get('name').patchValue(2);
  }

  makeTouch() {
    this.formGroup.get('name').markAsTouched();
  }

  makeDisable() {
    this.formGroup.get('name').disable();
  }
}
