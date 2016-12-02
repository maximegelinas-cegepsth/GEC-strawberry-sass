import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { CoreModule } from '../../Core';

import { HttpSubscriberService } from './HttpSubscriberService';
import { routing } from './NewsletterRouting';
import { NewsSubscriptionComponent } from './NewsSubscriptionComponent';
import { SubscriberService } from './SubscriberService';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,

        CoreModule.forRoot(),

        routing
    ],
    declarations: [NewsSubscriptionComponent],
    providers: [{ provide: SubscriberService, useClass: HttpSubscriberService }],
    exports: [NewsSubscriptionComponent]
})
export class NewsletterModule { }