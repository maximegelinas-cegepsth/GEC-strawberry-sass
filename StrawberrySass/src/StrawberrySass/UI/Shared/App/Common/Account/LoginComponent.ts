import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

import { Account } from './Account';
import { AccountService } from './AccountService';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: '/templates/shared/login',
    styleUrls: []
})
export class LoginComponent implements OnInit {

    accountForm: FormGroup;

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
        if (!this.accountForm) { return; }

        const form = this.accountForm;

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
        this._accountService.login(this.accountForm.value)
            .subscribe(
            () => {
                this.dialogRef.close();
            },
            () => {
                console.error('Login fail...');
            });
    }

    buildForm(): void {
        this.accountForm = this._formBuilder.group({
            'email': [null,
                [
                    Validators.required,
                    Validators.pattern('[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}')
                ]
            ],
            'password': [null,
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
                ]
            ]
        });

        this.accountForm.valueChanges
            .subscribe((data: any) => this.onValueChanged(data));

        this.onValueChanged();
    }

    formErrors = {
        'email': '',
        'password': ''
    };

    validationMessages = {
        'email': {
            'required': 'L\'Adresse courriel obligatoire.',
            'pattern': 'L\'Adresse courriel doit être valide.'
        },
        'password': {
            'required': 'Le mot de passe est obligatoire.',
            'minlength': 'Le mot de passe doit contenir au minimum 8 caractères.',
            'pattern': 'Le mot de passe doit contenir au moins une mujuscule, un nombre et un caractère spécial.'
        }
    };
}