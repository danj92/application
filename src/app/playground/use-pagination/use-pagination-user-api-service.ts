import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/api.service';

import { User } from './use-pagination-user.interface';

@Injectable()
export class UsePaginationUserApiService extends ApiService {
  private readonly usersUrl = '/users/';

  getUsers(params = {}): Promise<User[]> {
    return super.get<User[]>(`${this.usersUrl}`, params);
  }

  postUser(body): Promise<User[]> {
    return super.post<User[]>(this.usersUrl, body);
  }

  patchUser(id, body): Promise<User> {
    return super.patch<User>(`${this.usersUrl}${id}`, body);
  }

  putUser(id, body): Promise<User> {
    return super.put<User>(`${this.usersUrl}${id}`, body);
  }

  deleteUser(id: number) {
    return super.delete<User[]>(`${this.usersUrl}${id}`);
  }

  search(value) {
    return super.get<User[]>(`${this.usersUrl}`, {
      q: value,
    });
  }
}
