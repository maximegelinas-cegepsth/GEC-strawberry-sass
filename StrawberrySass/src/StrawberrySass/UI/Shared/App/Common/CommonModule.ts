import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AccountModule } from './Account/AccountModule';

@NgModule({
    imports: [
        NgCommonModule,
        MaterialModule.forRoot(),

        AccountModule
    ],
    declarations: [],
    exports: [
        NgCommonModule,
        MaterialModule,

        AccountModule
    ]
})
export class CommonModule { }