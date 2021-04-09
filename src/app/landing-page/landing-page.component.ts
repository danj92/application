import { Component, OnInit } from '@angular/core';

import { FireBaseService } from 'app/core/fire-base.service';

import { LandingPageApiService } from './landing-page-api-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private api: LandingPageApiService, private fbs: FireBaseService) {}

  async getUsers() {
    const users = this.api.getUsers();
    // eslint-disable-next-line no-console
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

  //  FIREBASE =====================================

  ngOnInit() {
    console.log();
  }

  createUser() {
    const value = {
      name: 'Stepan',
      surname: 'Wasylowycz',
    };

    this.fbs.addUser(value).then(res => {
      console.log('res1', res);
    });
  }

  getMyUsers() {
    this.fbs.getUsers().subscribe(actionArray => {
      const users = actionArray.map(item => {
        return { id: item.payload.doc.id, ...(item.payload.doc.data() as {}) };
      });

      console.log('Users', users);
    });
  }

  updateUser() {
    const value = {
      name: 'Wojciech',
      surname: 'Start',
    };
    this.fbs.updateUser('kP4VpXGmizBXgX6mcKE5', value);
  }

  deleteMyUser() {
    this.fbs.deleteUser('kP4VpXGmizBXgX6mcKE5');
  }
}
