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

    registerForm: FormGroup;

    constructor(
        private _accountService: AccountService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this.buildForm();
    }

    onValueChanged(data?: any) {
        if (!this.registerForm) { return; }

        const form = this.registerForm;

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
        this._accountService.register(this.registerForm.value)
            .subscribe(
            () => {
                this._router.navigate(['/welcome']);
            },
            () => {
                console.error('Registration fail...');
            });
    }

    buildForm(): void {
        this.registerForm = this._formBuilder.group({
            'email': [null,
                [
                    Validators.required,
                    Validators.pattern('[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}')
                ]
            ],
            'userName': [null,
                [
                    Validators.required,
                    Validators.maxLength(100),
                    Validators.minLength(4)
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

        this.registerForm.valueChanges
            .subscribe((data: any) => this.onValueChanged(data));

        this.onValueChanged();
    }

    formErrors = {
        'email': '',
        'userName': '',
        'password': ''
    };

    validationMessages = {
        'email': {
            'required': 'L\'Adresse courriel obligatoire.',
            'pattern': 'L\'Adresse courriel doit être valide.'
        },
        'userName': {
            'required': 'Le nom d\'usager est obligatoire.',
            'maxlength': 'Le nom d\'usager doit contenir au maximum 100 caractères.',
            'minlength': 'Le nom d\'usager doit contenir au minimum 4 caractères.'
        },
        'password': {
            'required': 'Le mot de passe est obligatoire.',
            'minlength': 'Le mot de passe doit contenir au minimum 8 caractères.',
            'pattern': 'Le mot de passe doit contenir au moins une mujuscule, un nombre et un caractère spécial.'
        }
    };

}