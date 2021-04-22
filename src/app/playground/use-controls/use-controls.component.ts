import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { wrapApiFormPost } from 'app/forms/form-helpers';

import { UsePaginationUserApiService } from '../use-pagination/use-pagination-user-api-service';

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

  constructor(private fb: FormBuilder, private api: UsePaginationUserApiService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      radio: ['', [Validators.required]],
      time: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: ['', [Validators.requiredTrue]],
      name: ['', [Validators.required]],
    });
  }

  submit() {
    wrapApiFormPost(this.formGroup, () => this.api.postUser(this.formGroup.value));
  }
}
