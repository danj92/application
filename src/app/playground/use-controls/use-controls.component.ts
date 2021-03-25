import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-controls',
  templateUrl: './use-controls.component.html',
  styleUrls: ['./use-controls.component.scss'],
})
export class UseControlsComponent implements OnInit {
  formGroup: FormGroup;

  items = [
    { name: 'radio 1', value: 'radio1' },
    { name: 'radio 2', value: 'radio2' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      radio: ['radio2', [Validators.required]],
      time: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: ['', [Validators.requiredTrue]],
      name: ['', [Validators.required]],
    });
  }
}
