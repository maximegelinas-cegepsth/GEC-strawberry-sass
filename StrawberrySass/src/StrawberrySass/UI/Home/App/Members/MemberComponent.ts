import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Member } from './Member';
import { MemberService } from './MemberService';

@Component({
    moduleId: module.id,
    selector: 'app-member',
    templateUrl: '/templates/home/member'
})
export class MemberComponent implements OnInit {

    member: Member;

    constructor(
        private _memberService: MemberService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            const userName = params['userName'];

            this._memberService.get(userName).subscribe(
                (member: Member) => this.member = member,
                () => console.error('Member acquisition failed...')
            );
        });
    }

    getRoleName(role: { string: boolean }): string {
        return Object.keys(role)[0];
    }

    getRoleValue(role: { string: boolean }): boolean {
        return role[Object.keys(role)[0]];
    }

    onMemberRoleChange(role: { string: boolean }, event: any): void {
        this.setRoleValue(this.getRoleName(role), event.checked);
        console.log('roles', this.member.roles);
    }

    onSubmit(): void {
        this._memberService.update(this.member).subscribe(
            () => this._router.navigate(['/members']),
            () => console.error('Member update failed...')
        );
    }

    setRoleValue(roleName: string, value: boolean) {
        this.member.roles.map((role: any) => {
            if (this.getRoleName(role) === roleName) {
                role[roleName] = value;
            }
        });
    }

}