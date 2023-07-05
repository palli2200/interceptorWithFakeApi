import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = "8179788870palliNaganjaneyuluToken1994"
    let modiReq = request.clone({
      headers : new HttpHeaders({
        Autherization: `Bearer ${ token }`
      })
    })
    return next.handle(modiReq);
  }
}
