import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';


import { AccountService, CultureService, CultureInfo, CultureRequest, LoginComponent, RegisteredUser, SurveyComponent } from '../Common';
import { NotificationService } from '../Core';

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

    userLogged = false;

    userRole: 'member' | 'admin';

    hasUnreadNotification = false;

    notificationsDialogRef: MdDialogRef<SurveyComponent>;

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

    constructor(
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        private _accountService: AccountService,
        private _cultureService: CultureService,
        private _notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this._accountService.logged.subscribe((user: RegisteredUser) => this.onLoggedUser(user));

        this._cultureService.getAll().subscribe(
            (cultures: CultureInfo[]) => this.cultures = cultures,
            () => console.error('Cultures acquisition fail...')
        );
    }

    onLoggedUser(user: RegisteredUser): void {
        if (!user) return;
        this.userLogged = true;

        if (!user.roles && user.roles.find(r => r === 'ForumBanned')) return;
        this.userRole = 'member';

        if (user.roles.find(r => r !== 'Administrator')) return;
        this.userRole = 'admin';

        this._notificationService.hasUnread.subscribe(
            () => {
                this.hasUnreadNotification = true;
            },
            () => console.error('Notifications acquisition fail...')
        );
    }

    openLoginDialog(): void {
        if (this.loginDialogRef != null) return;

        const config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.loginDialogRef = this.dialog.open(LoginComponent, config);

        this.loginDialogRef.afterClosed().subscribe(
            () => {
                this.loginDialogRef = null;
            }
        );
    }

    openNotificationsDialog(): void {
        this.hasUnreadNotification = false;

        if (this.notificationsDialogRef != null) return;

        const config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.notificationsDialogRef = this.dialog.open(SurveyComponent, config);

        this.notificationsDialogRef.afterClosed().subscribe(
            () => {
                this.notificationsDialogRef = null;
            }
        );
    }

    setCulture(culture: string) {
        this._cultureService.set({
            culture: culture,
            returnUrl: '/'
        }).subscribe(
            (success: boolean) => { if (success) window.location.href = '/' },
            () => console.error('Culture change fail...')
            );
    }

}