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
    getRequestor: (id: number) => this.get<User[]>(`users/${id}`),
  };

  requests = {
    getAll: () => this.get<Request[]>('requests'),
    get: (page = 1, limit = 5) => this.get<Request[]>(
      `requests?_page=${page}&_limit=${limit}`
    ),
    getSingleRequests: (id: string) => this.get<Request>(`requests?id=${id}`),
    create: (data: Request) => this.post<Request>('requests/', data),
    search: (params: string, limit: number) => this.get<Request[]>(
      `requests/?q=${params}&_limit=${limit}`
    ),
    update: (id: number, data: Request) => this.put<Request>(
      `requests/${id}/`, data
    ),
  };

  constructor(private http: HttpClient) { }

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
