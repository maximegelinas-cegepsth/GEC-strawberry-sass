import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetterEditorComponent } from './LetterEditorComponent';

const appRoutes: Routes = [
    { path: 'newsletter', redirectTo: '/newsletter/editor', pathMatch: 'full' },
    { path: 'newsletter/editor', component: LetterEditorComponent }
];

export const routing = RouterModule.forChild(appRoutes);