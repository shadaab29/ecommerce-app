import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutes,
    provideHttpClient() // ✅ Adds HTTP Client support
  ]
};
