import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ToastService } from 'app/core/toast.service';

import { UsePaginationUserApiService } from './use-pagination-user-api-service';
import { User } from './use-pagination-user.interface';
@Injectable()
export class UsePaginationUserService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
  users$ = this.users.asObservable().pipe(filter(users => !!users));

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

  async update(id: number, user) {
    try {
      const updatedUser = await this.api.patchUser(id, user);

      const users = [...this.users.value];

      const index = users.findIndex(u => u.id === id);

      if (index !== -1) {
        users.splice(index, 1, updatedUser);
      }

      this.users.next(users);

      this.toast.success('Pomyślnie zapisano.');
    } catch (error) {
      this.toast.error('Zapis nie powiódł się.');
    }
  }

  async delete(id: number) {
    try {
      await this.api.deleteUser(id);

      const users = [...this.users.value];

      const index = users.findIndex(u => u.id === id);

      if (index !== -1) {
        users.splice(index, 1);
      }

      this.users.next(users);
      this.toast.success('Pomyślnie usunięto.');
    } catch (error) {
      this.toast.error('Zapis nie powiódł się.');
    }
  }
}
