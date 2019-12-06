import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name1: ['', [Validators.required]],
      name2: ['', [Validators.required, Validators.email]],
      name3: ['', [Validators.required, Validators.email]],
    });

    console.log(this.formGroup.controls.name1.errors.required);
  }
}
