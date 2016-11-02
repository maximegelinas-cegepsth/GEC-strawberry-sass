import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: '/templates/home/register',
    styleUrls: ['RegisterComponent.css']
})
export class RegisterComponent implements OnInit {

    newUserForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.newUserForm = this._formBuilder.group({
            'email': ['',
                [
                    Validators.required,
                    Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
                ]
            ],
            'password': ['',
                [
                    Validators.required,
                    Validators.minLength(8)
                ]
            ]
        });

        this.newUserForm.valueChanges
            .subscribe((data: any) => this.onValueChanged(data));

        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.newUserForm) { return; }

        const form = this.newUserForm;

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