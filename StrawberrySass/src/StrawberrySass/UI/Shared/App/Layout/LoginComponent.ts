import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: '/templates/shared/login',
    styleUrls: []
})
export class LoginComponent implements OnInit {

    constructor(
        public dialogRef: MdDialogRef<LoginComponent>,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._router.events.subscribe((event: any) => {
            if (!(event instanceof NavigationEnd)) return;

            this.dialogRef.close();
        });
    }
}