import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('@modules/home').then((c) => c.HomeComponent),
        title: 'Home',
        data: {
            title: 'home',
        },
    },
    {
        path: 'portfolio',
        loadComponent: () =>
            import('@modules/portfolio').then((c) => c.PortfolioComponent),
        title: 'Portfolio',
        data: {
            title: 'portfolio',
        },
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('@modules/about-us').then((c) => c.AboutUsComponent),
        title: 'About Us',
        data: {
            title: 'about us',
        },
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('@modules/contact').then((c) => c.ContactComponent),
        title: 'Contact',
        data: {
            title: 'contact',
        },
    },
    {
        path: '**',
        redirectTo: '',
        title: 'Home',
    },
];
