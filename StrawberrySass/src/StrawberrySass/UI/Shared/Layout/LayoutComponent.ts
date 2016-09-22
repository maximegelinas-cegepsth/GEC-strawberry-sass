import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-layout',
    templateUrl: 'LayoutComponent.html'
})
export class LayoutComponent {

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

}