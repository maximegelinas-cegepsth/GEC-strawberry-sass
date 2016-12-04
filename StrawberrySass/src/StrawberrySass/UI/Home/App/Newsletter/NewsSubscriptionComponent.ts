import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { SubscriberService } from './SubscriberService';

@Component({
    moduleId: module.id,
    selector: 'app-news-subscription',
    templateUrl: '/templates/home/news-subscription',
    styleUrls: ['NewsSubscriptionComponent.css']
})
export class NewsSubscriptionComponent implements OnInit {

    newsSubscriptionForm: FormGroup;

    visible = true;

    constructor(
        private _formBuilder: FormBuilder,
        private _subscriberService: SubscriberService
    ) { }

    ngOnInit(): void {
        this.buildForm();
    }

    onSubmit() {
        this._subscriberService.add(this.newsSubscriptionForm.value).subscribe(
            () => {
                this.visible = false;
            },
            () => {
                console.error('Newsletter subscription fail...');
            }
        );
    }

    buildForm(): void {
        this.newsSubscriptionForm = this._formBuilder.group({
            'email': [null,
                [
                    Validators.required,
                    Validators.pattern('[\\w\\.\\-]+@[\\w\\-]+\\.\\w{2,4}')
                ]
            ]
        });
    }

    getControlErrors(controlName: string): string[] {
        const control = this.newsSubscriptionForm.get(controlName);
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