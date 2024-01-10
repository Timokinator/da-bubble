import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "da-bubble-9f879", "appId": "1:872329683690:web:21114e02f86b180bd52d93", "storageBucket": "da-bubble-9f879.appspot.com", "apiKey": "AIzaSyDmu3sXXJKQu_H4grv8B-H8i5Bx3jbFmQc", "authDomain": "da-bubble-9f879.firebaseapp.com", "messagingSenderId": "872329683690" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimations()]
};
