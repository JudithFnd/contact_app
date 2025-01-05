import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// import {API_KEY } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: import.meta.env.NG_APP_PROJECT_ID,
        appId: import.meta.env.NG_APP_APP_ID,
        storageBucket: import.meta.env.NG_APP_STORAGE_BUCKET,
        apiKey: import.meta.env.NG_APP_API_KEY,
        authDomain: import.meta.env.NG_APP_AUTH_DOMAIN,
        messagingSenderId: import.meta.env.NG_APP_MESSAGING_SENDER_ID,
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
