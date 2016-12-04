import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {EditorModule, SharedModule} from 'primeng/primeng';

import { CommonModule } from '../../../Shared/App/Common';

import { HttpLetterService } from './HttpLetterService';
import { HttpSubscriberService } from './HttpSubscriberService';
import { routing } from './NewsletterRouting';
import { LetterEditorComponent } from './LetterEditorComponent';
import { LetterService } from './LetterService';
import { NewsSubscriptionComponent } from './NewsSubscriptionComponent';
import { SubscriberService } from './SubscriberService';

@NgModule({
    imports: [
        FormsModule,

        CommonModule,

        EditorModule,
        SharedModule,

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