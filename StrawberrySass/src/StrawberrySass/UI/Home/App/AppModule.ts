import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdButtonModule } from '@angular2-material/button';
import { MdCoreModule } from '@angular2-material/core';
import { MdToolbarModule } from '@angular2-material/toolbar';


import { AboutComponent } from './AboutComponent';
import { AppComponent } from './AppComponent';
import { routing } from './AppRouting';
import { ContactUsComponent } from './ContactUsComponent';
import { WelcomeComponent } from './WelcomeComponent';

@NgModule({
    imports: [
        BrowserModule,

        MdButtonModule.forRoot(),
        MdCoreModule.forRoot(),
        MdToolbarModule.forRoot(),

        routing
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        ContactUsComponent,
        WelcomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }