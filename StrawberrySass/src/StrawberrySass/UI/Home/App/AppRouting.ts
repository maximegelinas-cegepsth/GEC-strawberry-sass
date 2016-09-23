import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './WelcomeComponent';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', loadChildren: 'App/About/AboutModule#AboutModule' },
    { path: 'contact-us', loadChildren: 'App/ContactUs/ContactUsModule#ContactUsModule' },
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);