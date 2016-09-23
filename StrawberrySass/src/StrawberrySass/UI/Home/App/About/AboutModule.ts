import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';

import { AboutComponent } from './AboutComponent';
import { routing } from './AboutRouting';

@NgModule({
    imports: [
        CommonModule,    

        MdButtonModule.forRoot(),
        MdIconModule.forRoot(),
        MdListModule.forRoot(),

        routing
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }