import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { AccountModule } from './Account/AccountModule';

@NgModule({
    imports: [
        NgCommonModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,

        AccountModule
    ],
    declarations: [],
    exports: [
        NgCommonModule,
        MaterialModule,
        ReactiveFormsModule,

        AccountModule
    ]
})
export class CommonModule { }