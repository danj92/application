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
      name: ['', [Validators.required]],
      checkbox: [false, [Validators.requiredTrue]],
    });
  }
}
