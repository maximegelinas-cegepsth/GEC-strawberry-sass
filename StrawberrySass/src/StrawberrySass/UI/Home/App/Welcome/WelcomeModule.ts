import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

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