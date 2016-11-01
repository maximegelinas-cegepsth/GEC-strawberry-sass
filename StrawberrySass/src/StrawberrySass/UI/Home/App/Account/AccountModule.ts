import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LoginComponent } from './LoginComponent';
import { routing } from './AccountRouting';

@NgModule({
    imports: [
        CommonModule,    

        routing
    ],
    declarations: [
        LoginComponent
    ]
})
export class AccountModule { }