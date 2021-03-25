import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

@Injectable()
export class ApiService {
  URL_PATH = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string): Promise<T> {
    return this.http.get<T>(`${this.URL_PATH}${url}`).toPromise();
  }

  post<T>(url: string, body: any = null) {
    return this.http.post<T>(`${this.URL_PATH}${url}`, body).toPromise();
  }

  patch<T>(url: string, body: any) {
    return this.http.patch<T>(`${this.URL_PATH}${url}`, body).toPromise();
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.URL_PATH}${url}`, body).toPromise();
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.URL_PATH}${url}`).toPromise();
  }
}
