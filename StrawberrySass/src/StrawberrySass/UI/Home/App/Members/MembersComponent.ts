import { Component, OnInit } from '@angular/core';

import { Member } from './Member';
import { MemberService } from './MemberService';

@Component({
    moduleId: module.id,
    selector: 'app-members',
    templateUrl: '/templates/home/members',
    styleUrls: ['MembersComponent.css']
})
export class MembersComponent implements OnInit {

    members: Member[];

    constructor(private _memberService: MemberService) { }

    ngOnInit(): void {
        this._memberService.getAll()
            .subscribe(
            (members: Member[]) => this.members = members,
            () => console.error('GET Members fail...')
            );
    }

}