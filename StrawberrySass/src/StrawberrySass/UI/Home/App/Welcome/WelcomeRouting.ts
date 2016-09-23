import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './WelcomeComponent';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent }
];

export const routing = RouterModule.forChild(appRoutes);