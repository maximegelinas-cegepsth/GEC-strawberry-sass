import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './MemberComponent';
import { MembersComponent } from './MembersComponent';

const appRoutes: Routes = [
    { path: '', component: MembersComponent },
    { path: ':userName', component: MemberComponent }
];

export const routing = RouterModule.forChild(appRoutes);