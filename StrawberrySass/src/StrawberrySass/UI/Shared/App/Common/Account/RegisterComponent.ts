import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from './AccountService';

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: '/templates/shared/register'
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

    onSubmit() {
        this._accountService.register(this.registerForm.value).subscribe(
            () => {
                this._router.navigate(['/welcome']);
            },
            () => {
                console.error('Registration fail...');
            }
        );
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
                    Validators.maxLength(100),
                    Validators.minLength(8),
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*')
                ]
            ]
        });
    }

    getControlErrors(controlName: string): string[] {
        const control = this.registerForm.get(controlName);
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