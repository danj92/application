import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-use-forms',
  templateUrl: './use-forms.component.html',
  styleUrls: ['./use-forms.component.scss'],
})
export class UseFormsComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name1: ['', [Validators.required, Validators.email]],
      name2: ['', [Validators.required, Validators.email]],
      name3: ['', [Validators.required, Validators.email]],
      checkbox: [false, [Validators.requiredTrue]],
      checkbox2: [false],
    });
  }
}
