import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './AboutComponent';
import { AppComponent } from './AppComponent';
import { routing } from './AppRouting';
import { ContactUsComponent } from './ContactUsComponent';
import { WelcomeComponent } from './WelcomeComponent';

@NgModule({
    imports: [
        BrowserModule,
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