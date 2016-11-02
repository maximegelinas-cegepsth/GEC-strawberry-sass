import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { CoreModule } from '../../Core';

import { AccountService } from './AccountService';
import { routing } from './AccountRouting';
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,

        CoreModule.forRoot(),

        routing
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    entryComponents: [LoginComponent],
    providers: [AccountService]
})
export class AccountModule { }