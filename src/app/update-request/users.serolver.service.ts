import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../core/api.service';
import { User } from '../interface/user.interface';


@Injectable()
export class UsersResolverService implements Resolve<User[]> {
  constructor(private api: ApiService) { }

  async resolve(route: ActivatedRouteSnapshot): Promise<User[]> {
    const request = await this.api.requests.getSinglerequests(route.paramMap.get('id'));
    return this.api.users.getRequestor(request[0].requestor);
  }
}
