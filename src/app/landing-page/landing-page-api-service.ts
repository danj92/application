import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/api.service';

export interface Users {
  name: string;
}

@Injectable()
export class LandingPageApiService extends ApiService {
  private readonly usersUrl = '/users/';

  getUsers(): Promise<Users[]> {
    return super.get<Users[]>(`${this.usersUrl}`);
  }

  postUser(body): Promise<Users[]> {
    return super.post<Users[]>(this.usersUrl, body);
  }

  patchUser(id, body) {
    return super.patch<Users[]>(`${this.usersUrl}${id}`, body);
  }

  putUser(id, body): Promise<Users[]> {
    return super.put<Users[]>(`${this.usersUrl}${id}`, body);
  }

  deleteUser(id: number) {
    return super.delete<Users[]>(`${this.usersUrl}${id}`);
  }
}
