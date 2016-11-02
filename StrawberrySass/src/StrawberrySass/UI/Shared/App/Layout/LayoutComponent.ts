import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { LoginComponent } from '../Common';

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
export class LayoutComponent {

    loginDialogRef: MdDialogRef<LoginComponent>;

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

    constructor(
        public loginDialog: MdDialog,
        public viewContainerRef: ViewContainerRef
    ) { }

    openLoginDialog() {
        if (this.loginDialogRef != null) return;

        const config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.loginDialogRef = this.loginDialog.open(LoginComponent, config);

        this.loginDialogRef.afterClosed().subscribe(() => {
            this.loginDialogRef = null;
        });
    }

}