import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../interface/request.interface';
import { User } from '../interface/user.interface';

@Injectable()
export class ApiService {
  URL_PATH = 'http://localhost:3000/';
  URL_CUSTOM = 'https://';

  users = {
    get: (url: string) => this.get<User[]>(url),
  };

  requests = {
    get: (url: string) => this.get<Request[]>(url),
    create: (data: Request) => this.post<Request>('requests/', data),
  };

  constructor(private http: HttpClient) {}

  private get<T>(url: string, params: any = {}): Promise<T> {
    return this.getObservable<T>(url, params).toPromise();
  }

  private getObservable<T>(url: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.URL_PATH}${url}`, {
      params,
    });
  }

  private getCustomObservable<T>(
    url: string,
    params: any = {},
  ): Observable<T> {
    return this.http.get<T>(`${this.URL_CUSTOM}${url}`, {
      params,
    });
  }

  private post<T>(url: string, body: any = null) {
    return this.http.post<T>(`${this.URL_PATH}${url}`, body).toPromise();
  }

  private put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.URL_PATH}${url}`, body).toPromise();
  }

  private delete<T>(url: string) {
    return this.http.delete<T>(`${this.URL_PATH}${url}`).toPromise();
  }
}
