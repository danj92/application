import { Component } from '@angular/core';

import { LandingPageApiService } from './landing-page-api-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private api: LandingPageApiService) {}

  getUsers() {
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
    this.api.putUser(12353, user);
  }

  patchUser() {
    const user = {
      displayName: 'Andriy Danylko PATCH',
    };
    this.api.patchUser(12353, user);
  }

  deleteUser() {
    this.api.deleteUser(12353);
  }
}
