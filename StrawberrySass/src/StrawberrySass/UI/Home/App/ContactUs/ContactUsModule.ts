import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdIconModule } from '@angular2-material/icon';

import { ContactUsComponent } from './ContactUsComponent';
import { routing } from './ContactUsRouting';

@NgModule({
    imports: [
        CommonModule,    

        MdIconModule.forRoot(),

        routing
    ],
    declarations: [
        ContactUsComponent
    ]
})
export class ContactUsModule { }