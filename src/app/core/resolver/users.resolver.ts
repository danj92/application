import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Users } from 'app/core/interfaces/user.interface';
import { LandingPageApiService } from 'app/landing-page/landing-page-api-service';

@Injectable()
export class UsersResolve implements Resolve<Users[]> {
  constructor(private api: LandingPageApiService) {}

  resolve(): Promise<Users[]> {
    return this.api.getUsers();
  }
}
