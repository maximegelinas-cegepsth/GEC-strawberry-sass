import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-layout',
    templateUrl: 'LayoutComponent.html',
    styleUrls: [
        'ToolbarComponent.css',
        'SidenavComponent.css'
    ]
})
export class LayoutComponent {

    links: {}[] = [
        { url: '/welcome', text: 'Accueil' },
        { url: '/about', text: 'À propos' },
        { url: '/contact-us', text: 'Nous joindre' }
    ];

    // TODO(maximegelinas): Gets the toolbar height dynamically.
    toolbarHeight = '64px';

}