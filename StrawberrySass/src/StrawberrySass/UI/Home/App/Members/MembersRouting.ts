import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './MembersComponent';

const appRoutes: Routes = [
    { path: '', component: MembersComponent }
];

export const routing = RouterModule.forChild(appRoutes);