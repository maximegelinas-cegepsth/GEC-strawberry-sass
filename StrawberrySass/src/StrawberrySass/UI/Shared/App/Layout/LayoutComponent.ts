import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { AccountService, CultureService, CultureInfo, CultureRequest, LoginComponent, RegisteredUser } from '../Common';

@Component({
    moduleId: module.id,
    selector: 'app-layout',
    templateUrl: '/templates/shared/layout',
    styleUrls: [
        'ToolbarComponent.css',
        'SidenavComponent.css',
        'FooterComponent.css'
    ]
})
export class LayoutComponent implements OnInit {

    cultures: CultureInfo[];

    loginDialogRef: MdDialogRef<LoginComponent>;

    showLoginBtn = true;

    showMembersLinks = false;

    showAdminsLinks = false;

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

    constructor(
        public loginDialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        private _accountService: AccountService,
        private _cultureService: CultureService
    ) { }

    ngOnInit(): void {
        this._accountService.logged.subscribe((user: RegisteredUser) => this.onLoggedUser(user));

        this._cultureService.getAll().subscribe(
            (cultures: CultureInfo[]) => this.cultures = cultures,
            () => console.error('GET Cultures fail...')
        );
    }

    onLoggedUser(user: RegisteredUser): void {
        if (!user) return;
        this.showLoginBtn = false;

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

    setCulture(culture: string) {
        this._cultureService.set({
            culture: culture,
            returnUrl: '/'
        }).subscribe(
            (success: boolean) => { if (success) window.location.href = '/' },
            () => console.error('POST Culture fail...')
        );
    }

}