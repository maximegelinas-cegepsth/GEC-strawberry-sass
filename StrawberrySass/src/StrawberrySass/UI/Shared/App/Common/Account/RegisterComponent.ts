import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from './AccountService';

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: '/templates/shared/register',
    styleUrls: ['RegisterComponent.css']
})
export class RegisterComponent implements OnInit {

    accountForm: FormGroup;

    constructor(
        private _accountService: AccountService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this.buildForm();
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
        this._accountService.register(this.accountForm.value)
            .subscribe(
            () => {
                this._router.navigate(['/welcome']);
            },
            () => {
                console.error('Registration fail...');
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