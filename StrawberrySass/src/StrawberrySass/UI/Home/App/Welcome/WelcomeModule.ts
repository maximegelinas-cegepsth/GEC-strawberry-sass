import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { NewsletterModule } from '../Newsletter/NewsletterModule'

import { WelcomeComponent } from './WelcomeComponent';
import { routing } from './WelcomeRouting';

@NgModule({
    imports: [
        CommonModule,    

        NewsletterModule,

        routing
    ],
    declarations: [
        WelcomeComponent
    ]
})
export class WelcomeModule { }