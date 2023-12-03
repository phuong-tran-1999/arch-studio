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
        path: 'about-us',
        loadComponent: () =>
            import('@modules/about-us').then((c) => c.AboutUsComponent),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('@modules/contact').then((c) => c.ContactComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
