import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { AccountModule } from './Account/AccountModule';
import { CultureModule } from './Culture/CultureModule';
import { NewsletterModule } from './Newsletter/NewsletterModule';

@NgModule({
    imports: [
        NgCommonModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,

        AccountModule,
        CultureModule,
        NewsletterModule
    ],
    declarations: [],
    exports: [
        NgCommonModule,
        MaterialModule,
        ReactiveFormsModule,

        AccountModule,
        CultureModule,
        NewsletterModule
    ]
})
export class CommonModule { }