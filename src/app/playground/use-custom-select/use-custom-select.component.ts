import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-custom-select',
  templateUrl: './use-custom-select.component.html',
  styleUrls: ['./use-custom-select.component.scss'],
})
export class UseCustomSelectComponent implements OnInit {
  form: FormGroup;

  options = [
    { title: 'Bananas', value: 'ban' },
    { title: 'Apples', value: 'app' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      option: ['', [Validators.required]],
    });
  }

  checkValue() {
    // this.form.controls.option.markAsPending();
    console.log(this.form.controls.option);
  }
}
