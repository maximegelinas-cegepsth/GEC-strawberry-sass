import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AboutComponent } from './AboutComponent';
import { routing } from './AboutRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }