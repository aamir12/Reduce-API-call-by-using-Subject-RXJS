import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
export class AppIdInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('app-id', '6112dc7c3f812e0d9b6679dd'), //append header
    });
    return next.handle(modifiedRequest);
  }
}
