import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './RegisterComponent';

const appRoutes: Routes = [
    { path: 'account/register', component: RegisterComponent }
];

export const routing = RouterModule.forChild(appRoutes);