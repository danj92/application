import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-checkbox',
  templateUrl: './use-checkbox.component.html',
  styleUrls: ['./use-checkbox.component.scss'],
})
export class UseCheckboxComponent implements OnInit {
  myNgModel = false;

  formGroup: FormGroup;

  myFormControl = new FormControl(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      checkbox1: [false, [Validators.requiredTrue]],
      checkbox2: [true],
    });
  }
}
