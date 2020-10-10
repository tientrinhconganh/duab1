import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    const userLogin = localStorage.getItem('user');
    if (userLogin) {
      const { accessToken } = JSON.parse(userLogin);
      const req = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${accessToken}`
        ),
      });
      return next.handle(req);
    }
    return next.handle(request);

  }
}
