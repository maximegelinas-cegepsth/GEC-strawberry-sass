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

    onValueChanged(data?: any) {
        if (!this.loginForm) { return; }

        const form = this.loginForm;

        for (const field in this.formErrors) {

            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {

                const messages = this.validationMessages[field];

                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    onSubmit() {
        this._accountService.login(this.loginForm.value)
            .subscribe(
            () => {
                this.dialogRef.close();
            },
            () => {
                console.error('Login fail...');
            });
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

        this.loginForm.valueChanges
            .subscribe((data: any) => this.onValueChanged(data));

        this.onValueChanged();
    }

    formErrors = {
        'userName': '',
        'password': ''
    };

    validationMessages = {
        'userName': {
            'required': 'Le nom d\'usager est obligatoire.',
            'maxlength': 'Le nom d\'usager doit contenir au maximum 100 caractères.',
            'minlength': 'Le nom d\'usager doit contenir au minimum 4 caractères.'
        },
        'password': {
            'required': 'Le mot de passe est obligatoire.',
            'maxlength': 'Le mot de passe doit contenir au maximum 100 caractères.',
            'minlength': 'Le mot de passe doit contenir au minimum 6 caractères.',
            'pattern': 'Le mot de passe doit contenir au moins une mujuscule, un nombre et un caractère spécial.'
        }
    };
}