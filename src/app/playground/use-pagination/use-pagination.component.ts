import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UsePaginationUserApiService } from './use-pagination-user-api-service';
import { People, User } from './use-pagination-user.interface';
import { UsePaginationUserService } from './use-pagination-user.service';

@Component({
  selector: 'app-use-pagination',
  templateUrl: './use-pagination.component.html',
  styleUrls: ['./use-pagination.component.scss'],
})
export class UsePaginationComponent implements OnInit, OnDestroy {
  users: User[];

  peoples: People[];

  numberOfUsers: number;

  subscription: Subscription = new Subscription();

  currentPage: number;

  articlesPerPage: number;

  search: FormControl = new FormControl();

  DEBOUNCE_TIME = 300;

  loading = false;

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
        .subscribe(val => this.searchPeoples(val)),
    );

    this.getPeoples();
  }

  async getPeoples() {
    const params = {
      _sort: 'name',
      _order: 'asc',
    };
    this.peoples = await this.api.getPeoples(params);
  }

  async searchPeoples(value: string) {
    try {
      this.loading = true;
      if (value === '') {
        this.peoples = await this.api.getPeoples();
      } else {
        this.peoples = await this.api.searchPeoples(value);
      }
    } catch (e) {
    } finally {
      this.loading = false;
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

  sortUp() {
    this.peoples.sort((a, b) =>
      a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
    );
  }

  sortDown() {
    this.peoples.sort((a, b) =>
      b.name.localeCompare(a.name, 'en', { sensitivity: 'base' }),
    );
  }

  sortNumUp() {
    this.peoples.sort(function(a, b) {
      return a.id === b.id ? 0 : +(a.id > b.id) || -1;
    });
  }

  sortNumDown() {
    this.peoples.sort(function(a, b) {
      return a.id === b.id ? 0 : +(a.id < b.id) || -1;
    });
  }
}
