import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Request } from '../interface/request.interface';

@Injectable()
export class UpdateRequestResolverService implements Resolve<Request> {
  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Request> {
    return this.api.requests.getSingleRequests(route.paramMap.get('id'));
  }
}
