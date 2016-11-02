import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Account } from './Account';
import { AccountService } from './AccountService';

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: '/templates/home/register',
    styleUrls: ['RegisterComponent.css']
})
export class RegisterComponent implements OnInit {

    accountForm: FormGroup;

    constructor(
        private _accountService: AccountService, 
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.buildForm();
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
                    Validators.minLength(8)
                ]
            ]
        });

        this.accountForm.valueChanges
            .subscribe((data: any) => this.onValueChanged(data));

        this.onValueChanged();
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
        console.log('post', this.accountForm.value);
        this._accountService.register(this.accountForm.value)
            .subscribe();
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
            'minlength': 'Le mot de passe doit contenir au minimum 8 caractères.'
        }
    };

}