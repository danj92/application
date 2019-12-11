import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { wrapApiFormPost } from '../forms/form-helpers';

@Injectable({ providedIn: 'root' })
export class CoreService {
  // _users = new BehaviorSubject<any>([]);
  // users$ = this._users.asObservable();

  // _requests = new BehaviorSubject<any>([]);
  // requests$ = this._requests.asObservable();

  constructor(private api: ApiService) {}

  // async fetchUsers() {
  //   const users = await this.api.users.get('users');
  //   this._users.next(users);
  // }

  // async fetchRequests() {
  //   const requests = await this.api.requests.get('requests');
  //   this._requests.next(requests);
  //   return requests;
  // }

  // async addForm(formGroupValue) {
  // try {
  //   const result = await wrapApiFormPost(formGroup, () =>
  //     this.api.requests.newRequests(formGroup),
  //   );
  //   console.log('!!!', result);
  //   this._requests.next(this._requests.value.concat([result]));
  // } catch (e) {}
  // try {
  //   const result = await this.api.requests.newRequests(formGroupValue);
  // } catch (e) {}
  // }
}
