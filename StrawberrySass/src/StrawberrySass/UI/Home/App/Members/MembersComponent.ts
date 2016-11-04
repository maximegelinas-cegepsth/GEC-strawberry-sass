import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor(
        private _memberService: MemberService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this.refreshMembers();
    }

    onMemberDelete(member: Member): void {
        this._memberService.delete(member).subscribe(
            () => { },
            () => console.log('DELETE member fail...')
        );

        this.refreshMembers();
    }

    onMemberEdit(member: Member): void {
        this._router.navigate([member.userName], { relativeTo: this._route });
    }

    refreshMembers(): void {
        this._memberService.getAll().subscribe(
            (members: Member[]) => this.members = members,
            () => console.error('GET Members fail...')
        );
    }

}