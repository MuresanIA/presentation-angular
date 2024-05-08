import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OldLoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        console.log('[OLD] ' + req.method + ': ' + req.url);
        return handler.handle(req);
    }
}