import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

import { AccountService } from './AccountService';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: '/templates/shared/login',
    styleUrls: []
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        public dialogRef: MdDialogRef<LoginComponent>,
        private _accountService: AccountService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this.buildForm();

        this._router.events.subscribe((event: any) => {
            if (!(event instanceof NavigationEnd)) return;

            this.dialogRef.close();
        });
    }

    onSubmit() {
        this._accountService.login(this.loginForm.value).subscribe(
            () => {
                this.dialogRef.close();
            },
            () => {
                console.error('Login fail...');
            }
        );
    }

    buildForm(): void {
        this.loginForm = this._formBuilder.group({
            'userName': ['AdminUser',
                [
                    Validators.required,
                    Validators.maxLength(100),
                    Validators.minLength(4)
                ]
            ],
            'password': ['Qwert123!',
                [
                    Validators.required,
                    Validators.maxLength(100),
                    Validators.minLength(6),
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
                ]
            ]
        });
    }

    getControlErrors(controlName: string): string[] {
        const control = this.loginForm.get(controlName);
        const errors: string[] = [];

        if (control && control.dirty && !control.valid) {
            for (const key in control.errors)
                errors.push(key);
        }

        return errors;
    }

    isControlErrors(controlName: string): boolean {
        return this.getControlErrors(controlName).length > 0;
    }
}