import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

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