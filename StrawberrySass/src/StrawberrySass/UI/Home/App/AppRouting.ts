import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './AboutComponent';
import { ContactUsComponent } from './ContactUsComponent';
import { WelcomeComponent } from './WelcomeComponent';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);