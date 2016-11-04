import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { ForumComponent } from './ForumComponent';
import { routing } from './ForumRouting';
import { SubjectService } from './SubjectService';
import { HttpSubjectService } from './HttpSubjectService';
import { SubjectComponent } from './SubjectComponent';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        ForumComponent,
        SubjectComponent
    ],
    providers: [{ provide: SubjectService, useClass: HttpSubjectService }]
})
export class ForumModule { }