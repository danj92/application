import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  numberOfUsers: number;

  subscription: Subscription = new Subscription();

  currentPage: number;

  articlesPerPage: number;

  search: FormControl = new FormControl();

  DEBOUNCE_TIME = 300;

  constructor(
    private api: UsePaginationUserApiService,
    private route: ActivatedRoute,
    private userService: UsePaginationUserService,
  ) {}

  ngOnInit() {
    this.numberOfUsers = this.route.snapshot.data.users.length;

    this.subscription.add(
      this.userService.users$.subscribe(user => {
        this.numberOfUsers = user.length;

        // TODO
        const page = {
          currentPage: this.currentPage,
          articlesPerPage: this.articlesPerPage,
        };
        this.fetchCurrentPage(page);
      }),
    );

    this.subscription.add(
      this.search.valueChanges
        .pipe(debounceTime(this.DEBOUNCE_TIME), distinctUntilChanged())
        .subscribe(val => this.getUser(val)),
    );
  }

  async getUser(value: string) {
    if (value === '') {
      try {
        this.users = await this.api.getUsers();
      } catch (e) {}
    } else {
      try {
        this.users = await this.api.search(value);
      } catch (e) {}
    }
  }

  createUser() {
    const user = {
      name: 'Nowy User',
    };
    this.userService.create(user);
  }

  updateUser() {
    const id = 2;
    const user = {
      name: 'Update user 11',
    };
    this.userService.update(id, user);
  }

  deleteUser() {
    const id = 1;
    this.userService.delete(id);
  }

  async fetchCurrentPage(_page: { currentPage: number; articlesPerPage: number }) {
    const params = {
      _page: _page.currentPage,
      _limit: _page.articlesPerPage,
    };

    // TODO
    this.currentPage = _page.currentPage;
    this.articlesPerPage = _page.articlesPerPage;

    this.users = await this.api.getUsers(params);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
