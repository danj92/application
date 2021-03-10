import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-custom-input',
  templateUrl: './use-custom-input.component.html',
  styleUrls: ['./use-custom-input.component.scss'],
})
export class UseCustomInputComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  save() {
    console.log(this.formGroup.value);
  }
}
