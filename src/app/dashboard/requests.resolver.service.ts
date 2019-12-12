import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Request } from '../interface/request.interface';

@Injectable()
export class RequestsResolverService implements Resolve<Request[]> {
  constructor(private api: ApiService) { }

  resolve(): Promise<Request[]> {
    return this.api.requests.get();
  }
}
