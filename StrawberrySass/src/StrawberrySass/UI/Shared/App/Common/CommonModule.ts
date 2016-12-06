import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { AccountModule } from './Account/AccountModule';
import { CultureModule } from './Culture/CultureModule';
import { SurveysModule } from './Surveys/SurveysModule';


@NgModule({
    imports: [
        NgCommonModule,
        MaterialModule,
        ReactiveFormsModule,

        AccountModule,
        CultureModule,
        SurveysModule
    ],
    declarations: [],
    exports: [
        NgCommonModule,
        MaterialModule,
        ReactiveFormsModule,

        AccountModule,
        CultureModule,
        SurveysModule
    ]
})
export class CommonModule { }