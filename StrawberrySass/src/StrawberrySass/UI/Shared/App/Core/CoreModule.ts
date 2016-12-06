import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NotificationService } from './NotificationService';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [NotificationService],
    exports: [HttpModule]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        }
    }

}