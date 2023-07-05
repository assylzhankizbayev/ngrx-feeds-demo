import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const authReq = req.clone({
    //   headers: req.headers.set('Session', '123456789'),
    // });

    // return next.handle(authReq).pipe(
    //   tap(
    //     (event) => {
    //       if (event instanceof HttpResponse) console.log('Server response');
    //     },
    //     (err) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status == 401) console.log('Unauthorized');
    //       }
    //     }
    //   )
    // );

    const token = this._authService.token?.accessToken;
    
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req);
  }
}
