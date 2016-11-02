import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

import { CommonModule } from '../../../Shared/App/Common';

import { RegisterComponent } from './RegisterComponent';
import { routing } from './AccountRouting';

@NgModule({
    imports: [
        ReactiveFormsModule,

        CommonModule,    

        routing
    ],
    declarations: [RegisterComponent]
})
export class AccountModule { }