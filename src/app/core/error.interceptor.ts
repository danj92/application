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
  constructor(private toast: ToastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        () => {},
        err => {
          if (err instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
              this.toast.error('Brak połączenia z internetem.');
              return;
            }
            const response = err as HttpErrorResponse;
            if (response.status === 500) {
              this.toast.error('Nieoczekiwany błąd serwera.');
            } else if (response.status === 0) {
              this.toast.error('Brak odpowiedzi od serwera.');
            }
          }
        },
      ),
    );
  }
}

// export declare class DefaultUrlSerializer implements UrlSerializer {
//   /** Parses a url into a `UrlTree` */
//   parse(url: string): UrlTree;
//   /** Converts a `UrlTree` into a url */
//   serialize(tree: UrlTree): string;
// }
