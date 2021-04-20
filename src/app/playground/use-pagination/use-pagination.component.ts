import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { UsePaginationUserApiService } from './use-pagination-user-api-service';
import { User } from './use-pagination-user.interface';
import { UsePaginationUserService } from './use-pagination-user.service';

@Component({
  selector: 'app-use-pagination',
  templateUrl: './use-pagination.component.html',
  styleUrls: ['./use-pagination.component.scss'],
})
export class UsePaginationComponent implements OnInit, OnDestroy {
  users: User[];

  usersList: User[];

  subscription: Subscription = new Subscription();

  constructor(
    private api: UsePaginationUserApiService,
    private route: ActivatedRoute,
    private userService: UsePaginationUserService,
  ) {}

  ngOnInit() {
    this.subscription = this.userService.users$.subscribe(user => {
      this.users = user;
    });
  }

  createUser() {
    const user = {
      name: 'Mikolaj Janowski Create',
    };
    this.userService.create(user);
  }

  updateUser() {
    const id = 6;
    const user = {
      name: 'Mikolaj Janowski Update',
    };
    this.userService.update(id, user);
  }

  async fetchCurrentPage(_page: { currentPage: number; articlesPerPage: number }) {
    const params = {
      _page: _page.currentPage,
      _limit: _page.articlesPerPage,
    };

    this.users = await this.api.getUsers(params);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
