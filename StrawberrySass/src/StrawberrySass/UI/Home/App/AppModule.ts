import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '../../Shared/App/Common';
import { LayoutComponent, LoginComponent } from '../../Shared/App/Layout';

import { routing } from './AppRouting';

@NgModule({
    imports: [
        BrowserModule,

        CommonModule,

        routing
    ],
    declarations: [
        LayoutComponent,
        LoginComponent
    ],
    entryComponents: [LoginComponent],
    bootstrap: [LayoutComponent]
})
export class AppModule { }