import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    console.log('this is client side error');
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    console.log(`this is serve side error`);
                    errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
                }
                console.log(errorMsg);
                return throwError(() => errorMsg);
            }),
        );
    }
}