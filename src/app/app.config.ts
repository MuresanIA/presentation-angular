import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

import { httpErrorInterceptor } from './interceptors/new/new-error.interceptor';
import { OldLoggingInterceptor } from './interceptors/old/old-logging.interceptor';
import { newLoggingInterceptor } from './interceptors/new/new-logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([newLoggingInterceptor, httpErrorInterceptor]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OldLoggingInterceptor,
      multi: true,
    },
  ],
};
