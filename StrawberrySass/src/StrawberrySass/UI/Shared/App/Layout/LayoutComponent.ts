import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { AccountService, LoginComponent, User } from '../Common';

@Component({
    moduleId: module.id,
    selector: 'app-layout',
    templateUrl: 'LayoutComponent.html',
    styleUrls: [
        'ToolbarComponent.css',
        'SidenavComponent.css',
        'FooterComponent.css'
    ]
})
export class LayoutComponent implements OnInit {

    loginDialogRef: MdDialogRef<LoginComponent>;

    showLoginBtn = true;

    showMembersLinks = false;

    showAdminsLinks = false;

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

    constructor(
        public loginDialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        private _accountService: AccountService
    ) { }

    ngOnInit(): void {
        this._accountService.logged.subscribe((user: User) => this.onLoggedUser(user));
    }

    onLoggedUser(user: User): void {
        if (!user) return;
        this.showLoginBtn = false;

        console.log(user);
        console.log(user.roles);

        if (!user.roles && user.roles.find(r => r === 'ForumBanned')) return;
        this.showMembersLinks = true;

        if (user.roles.find(r => r !== 'Administrator')) return;
        this.showAdminsLinks = true;
    }

    openLoginDialog(): void {
        if (this.loginDialogRef != null) return;

        const config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.loginDialogRef = this.loginDialog.open(LoginComponent, config);

        this.loginDialogRef.afterClosed().subscribe(() => {
            this.loginDialogRef = null;
        });
    }

}