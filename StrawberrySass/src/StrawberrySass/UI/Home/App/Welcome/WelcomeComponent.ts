import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-welcome',
    templateUrl: '/template/home/welcome',
    styleUrls: [
        'HeaderComponent.css',
        'WelcomeComponent.css'
    ]
})
export class WelcomeComponent implements OnInit {

    headerHeight: string;

    ngOnInit(): void {
        this.setHeaderHeight();
    }

    setHeaderHeight() {
        this.headerHeight = `${window.innerHeight - 64}px`;
    }

}