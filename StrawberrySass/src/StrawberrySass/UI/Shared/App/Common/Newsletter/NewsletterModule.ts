import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {EditorModule, SharedModule} from 'primeng/primeng';

import { CoreModule } from '../../Core';

import { HttpLetterService } from './HttpLetterService';
import { HttpSubscriberService } from './HttpSubscriberService';
import { routing } from './NewsletterRouting';
import { LetterEditorComponent } from './LetterEditorComponent';
import { LetterService } from './LetterService';
import { NewsSubscriptionComponent } from './NewsSubscriptionComponent';
import { SubscriberService } from './SubscriberService';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,

        EditorModule,
        SharedModule,

        CoreModule.forRoot(),

        routing
    ],
    declarations: [
        LetterEditorComponent,
        NewsSubscriptionComponent
    ],
    providers: [
        { provide: LetterService, useClass: HttpLetterService },
        { provide: SubscriberService, useClass: HttpSubscriberService }
    ],
    exports: [NewsSubscriptionComponent]
})
export class NewsletterModule { }