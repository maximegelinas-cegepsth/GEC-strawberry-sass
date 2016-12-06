import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { CoreModule } from '../../Core';

import { SurveyComponent } from './SurveyComponent';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,

        CoreModule.forRoot()
    ],
    declarations: [
        SurveyComponent
    ],
    entryComponents: [SurveyComponent],
    exports: [SurveyComponent]
})
export class SurveysModule { }