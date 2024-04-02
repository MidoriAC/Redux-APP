import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState, provideStore } from '@ngrx/store';
import { bookFeatureKey, bookReducer, collectionFeatureKey, collectionReducer } from './books';
import { provideHttpClient } from '@angular/common/http';
import { counterFeatureKey, counterReducer } from './counter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(),
    provideState({ name: bookFeatureKey, reducer: bookReducer },),
    provideState({ name: collectionFeatureKey, reducer: collectionReducer }),
    provideState({ name: counterFeatureKey, reducer: counterReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
