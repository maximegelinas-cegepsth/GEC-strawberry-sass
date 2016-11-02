import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule }   from '@angular/forms';

import { CoreModule } from '../../Core';

import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';
import { routing } from './AccountRouting';

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
    entryComponents: [LoginComponent]
})
export class AccountModule { }