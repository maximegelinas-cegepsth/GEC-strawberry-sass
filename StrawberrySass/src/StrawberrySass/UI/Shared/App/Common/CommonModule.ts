import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule, MdIconRegistry } from '@angular/material';

@NgModule({
    imports: [
        NgCommonModule,
        MaterialModule.forRoot()
    ],
    declarations: [],
    exports: [
        NgCommonModule,
        MaterialModule
    ]
})
export class CommonModule { }