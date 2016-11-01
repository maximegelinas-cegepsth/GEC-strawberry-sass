import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MembersComponent } from './MembersComponent';
import { routing } from './MembersRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        MembersComponent
    ]
})
export class MembersModule { }