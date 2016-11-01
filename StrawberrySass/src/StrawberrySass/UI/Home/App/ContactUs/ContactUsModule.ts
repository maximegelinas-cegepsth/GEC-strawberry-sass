import { NgModule } from '@angular/core';

import { CommonModule } from '../../../Shared/App/Common';

import { ContactUsComponent } from './ContactUsComponent';
import { routing } from './ContactUsRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        ContactUsComponent
    ]
})
export class ContactUsModule { }