/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'test',
    loadComponent: () => import('@modules/home').then((c) => c.HomeComponent),
  },
];
