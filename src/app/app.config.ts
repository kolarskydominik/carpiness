import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      // withPreloading(PreloadAllModules),
      // withDebugTracing(),
      withViewTransitions(),
    ),
    // provideAnimations(),
    provideAnimationsAsync(),
  ],
};
