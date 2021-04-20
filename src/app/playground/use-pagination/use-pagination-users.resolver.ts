import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { UsePaginationUserApiService } from './use-pagination-user-api-service';
import { User } from './use-pagination-user.interface';

@Injectable()
export class UsePaginationUsersResolve implements Resolve<User[]> {
  constructor(private api: UsePaginationUserApiService) {}

  resolve(): Promise<User[]> {
    return this.api.getUsers();
  }
}
