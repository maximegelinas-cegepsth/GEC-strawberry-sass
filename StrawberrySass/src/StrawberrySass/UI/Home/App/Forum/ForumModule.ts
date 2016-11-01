import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { ForumComponent } from './ForumComponent';
import { routing } from './ForumRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        ForumComponent
    ]
})
export class ForumModule { }