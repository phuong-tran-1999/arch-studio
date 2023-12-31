import { ApplicationConfig } from '@angular/core';
import {
    InMemoryScrollingOptions,
    provideRouter,
    withInMemoryScrolling,
    withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const scrollConfig: InMemoryScrollingOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top',
};
const inMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideRouter(
            appRoutes,
            inMemoryScrollingFeature,
            withViewTransitions(),
        ),
    ],
};
