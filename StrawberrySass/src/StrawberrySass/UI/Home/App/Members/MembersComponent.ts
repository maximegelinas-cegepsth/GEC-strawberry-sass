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
        this._memberService.delete(member.userName).subscribe(
            () => {
                const index = this.members.indexOf(member);
                if (index === -1) return;
                this.members.splice(index, 1);

                setTimeout(this.refreshMembers(), 100);
            },
            () => console.error('Member delete failed....')
        );
    }

    onMemberEdit(member: Member): void {
        this._router.navigate([member.userName], { relativeTo: this._route });
    }

    refreshMembers(): void {
        this._memberService.getAll().subscribe(
            (members: Member[]) => this.members = members,
            () => console.error('Members acquisition failed...')
        );
    }

}