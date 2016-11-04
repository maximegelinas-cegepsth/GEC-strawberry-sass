import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { ForumComponent } from './ForumComponent';
import { routing } from './ForumRouting';
import { SubjectService } from './SubjectService';
import { HttpSubjectService } from './HttpSubjectService';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        ForumComponent
    ],
    providers: [{ provide: SubjectService, useClass: HttpSubjectService }]
})
export class ForumModule { }