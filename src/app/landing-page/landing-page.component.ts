import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  formGroup: FormGroup;

  test1: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      // name: ['', [Validators.required]],
      lastname: [''],
      // checkbox: ['', [Validators.requiredTrue]],
    });
  }

  save() {
    this.formGroup.markAllAsTouched();
    console.log(this.formGroup.value);
  }
}
