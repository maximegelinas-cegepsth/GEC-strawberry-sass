import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './ForumComponent';
import { SubjectComponent } from './SubjectComponent';

const appRoutes: Routes = [
    { path: '', component: ForumComponent },
    { path: 'subjects/:id', component: SubjectComponent }
];

export const routing = RouterModule.forChild(appRoutes);