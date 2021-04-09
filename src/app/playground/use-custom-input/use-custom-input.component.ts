import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-custom-input',
  templateUrl: './use-custom-input.component.html',
  styleUrls: ['./use-custom-input.component.scss'],
})
export class UseCustomInputComponent implements OnInit {
  formGroup: FormGroup;
  form: FormGroup;

  myFormControl = new FormControl('test');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      lastname: [{ value: '', disabled: true }],
    });

    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
}
