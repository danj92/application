import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from 'app/core/interfaces/user.interface';

import { LandingPageApiService } from './landing-page-api-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  users: Users[];

  usersList: Users[];

  constructor(private api: LandingPageApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
  }

  async getUsers() {
    const myusers = await this.api.getUsers();
    // eslint-disable-next-line no-console
    console.log('myusers', myusers);
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

  selectedPage(value) {
    console.log('LP-selected', value);
  }

  async fetchCurrentPage(_page: number, _limit: number) {
    const params = {
      _page,
      _limit,
    };

    this.usersList = await this.api.getUsers(params);

    // console.log('FF', this.usersList);
  }
}
