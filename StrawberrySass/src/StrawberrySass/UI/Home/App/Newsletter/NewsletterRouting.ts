import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetterEditorComponent } from './LetterEditorComponent';

const appRoutes: Routes = [
    { path: 'editor', component: LetterEditorComponent }
];

export const routing = RouterModule.forChild(appRoutes);