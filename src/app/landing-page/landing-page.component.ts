import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { wrapApiFormPost } from 'app/forms/form-helpers';

import { LandingPageApiService } from './landing-page-api-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  formGroup: FormGroup;

  items1 = [
    { name: 'radio 1', value: 'radio1' },
    { name: 'radio 2', value: 'radio2' },
  ];

  constructor(private api: LandingPageApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      radio: ['', [Validators.required]],
      time: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: ['', [Validators.requiredTrue]],
      name: ['', [Validators.required]],
    });
  }

  async getUsers() {
    const users = this.api.getUsers();
    console.log('users', users);
  }

  postUser() {
    const user = {
      displayName: 'Ali Gator (DABA)',
      name: 'Ali',
      surname: 'Gator',
      department: 'DABA',
      email: 'ali.gator@company.com',
      manager: true,
      roles: ['Manager', 'Account Manager', 'SPOC'],
    };
    this.api.postUser(user);
  }

  putUser() {
    const user = {
      displayName: 'Andriy Danylko PUT',
    };
    this.api.putUser(12354, user);
  }

  patchUser() {
    const user = {
      displayName: 'Andriy Danylko PATCH',
    };
    this.api.patchUser(12354, user);
  }

  deleteUser() {
    this.api.deleteUser(12354);
  }

  save() {
    console.log(this.formGroup.value);
    wrapApiFormPost(this.formGroup, () => {
      return this.api.getUsers();
    });
  }
}
