import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('@modules/home').then((c) => c.HomeComponent),
    },
    {
        path: 'portfolio',
        loadComponent: () =>
            import('@modules/portfolio').then((c) => c.PortfolioComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
