import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './AboutComponent';

const appRoutes: Routes = [
    { path: '', component: AboutComponent }
];

export const routing = RouterModule.forChild(appRoutes);