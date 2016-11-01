import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

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