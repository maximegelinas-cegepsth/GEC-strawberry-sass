import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './ForumComponent';

const appRoutes: Routes = [
    { path: '', component: ForumComponent }
];

export const routing = RouterModule.forChild(appRoutes);