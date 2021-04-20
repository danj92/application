import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ToastService } from 'app/core/toast.service';

import { UsePaginationUserApiService } from './use-pagination-user-api-service';
import { User } from './use-pagination-user.interface';
@Injectable()
export class UsePaginationUserService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
  users$ = this.users.asObservable();

  constructor(private api: UsePaginationUserApiService, private toast: ToastService) {
    this.fetch();
  }

  async fetch() {
    try {
      const users = await this.api.getUsers();
      this.users.next(users);
    } catch (e) {
      this.toast.error(e.error);
    }
  }

  async create(user: User) {
    try {
      const newUser = await this.api.postUser(user);
      const users = [...this.users.value, newUser] as User[];
      this.users.next(users);
      this.toast.success('Pomyślnie dodano.');
    } catch (error) {
      this.toast.error('Zapis nie powiódł się.');
    }
  }

  async update(id, user) {
    try {
      await this.api.patchUser(id, user);
      this.toast.success('Pomyślnie zapisano.');
    } catch (error) {
      this.toast.error('Zapis nie powiódł się.');
    }
  }
}
