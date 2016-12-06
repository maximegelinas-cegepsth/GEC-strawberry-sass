import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-survey',
    templateUrl: '/templates/shared/survey'
})
export class SurveyComponent implements OnInit {

    constructor(
        public dialogRef: MdDialogRef<SurveyComponent>,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._router.events.subscribe((event: any) => {
            if (!(event instanceof NavigationEnd)) return;

            this.dialogRef.close();
        });
    }

    onSubmit() {
        this.dialogRef.close();
    }

}