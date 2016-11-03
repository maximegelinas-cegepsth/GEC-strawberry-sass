import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { HttpMemberService } from './HttpMemberService';
import { MembersComponent } from './MembersComponent';
import { MemberService } from './MemberService';
import { routing } from './MembersRouting';

@NgModule({
    imports: [
        CommonModule,

        routing
    ],
    declarations: [
        MembersComponent
    ],
    providers: [{ provide: MemberService, useClass: HttpMemberService }]
})
export class MembersModule { }