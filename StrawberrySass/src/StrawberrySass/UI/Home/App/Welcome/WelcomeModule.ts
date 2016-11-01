import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { WelcomeComponent } from './WelcomeComponent';
import { routing } from './WelcomeRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        WelcomeComponent
    ]
})
export class WelcomeModule { }