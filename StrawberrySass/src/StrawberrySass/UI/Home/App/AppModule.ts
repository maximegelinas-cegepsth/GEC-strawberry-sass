import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '../../Shared/App/Common';
import { CoreModule } from '../../Shared/App/Core';
import { LayoutComponent } from '../../Shared/App/Layout';

import { routing } from './AppRouting';

@NgModule({
    imports: [
        BrowserModule,

        CommonModule,
        CoreModule.forRoot(),

        routing
    ],
    declarations: [
        LayoutComponent,
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule { }