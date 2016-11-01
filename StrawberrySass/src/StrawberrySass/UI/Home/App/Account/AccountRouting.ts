import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './LoginComponent';

const appRoutes: Routes = [
    { path: 'register', component: LoginComponent }
];

export const routing = RouterModule.forChild(appRoutes);