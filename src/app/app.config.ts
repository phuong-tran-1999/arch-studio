import { ApplicationConfig } from '@angular/core';
import {
    InMemoryScrollingOptions,
    provideRouter,
    withInMemoryScrolling,
} from '@angular/router';
import { appRoutes } from './app.routes';

const scrollConfig: InMemoryScrollingOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top',
};
const inMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes, inMemoryScrollingFeature)],
};
