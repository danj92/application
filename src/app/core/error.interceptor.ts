import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastService } from './toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toast: ToastService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        () => { },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
              this.toast.error('No internet connection.');
              return;
            }
            const response = err as HttpErrorResponse;
            if (response.status === 500) {
              this.toast.error('Unexpected server error.');
            } else if (response.status === 0) {
              this.toast.error('No response from the server.');
            }
          }
        },
      ),
    );
  }
}
