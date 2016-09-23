import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './ContactUsComponent';

const appRoutes: Routes = [
    { path: '', component: ContactUsComponent }
];

export const routing = RouterModule.forChild(appRoutes);