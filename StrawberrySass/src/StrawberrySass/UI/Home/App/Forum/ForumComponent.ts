import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from './Subject';
import { SubjectService } from './SubjectService';

@Component({
    moduleId: module.id,
    selector: 'app-forum',
    templateUrl: '/templates/home/forum',
    styleUrls: ['ForumComponent.css']
})
export class ForumComponent implements OnInit {

    subjects: Subject[];

    constructor(
        private _subjectsService: SubjectService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._subjectsService.getAll().subscribe(
            (subjects: Subject[]) => this.subjects = subjects,
            () => console.error('GET Subjects fail...')
        );
    }

    onSubjectSee(subject: Subject): void {
        this._router.navigate(['subjects', subject.id], { relativeTo: this._route });
    }

    onSubjectAdd(subject: Subject): void {
        alert('Pas terminé...');
        //this._router.navigate(['subjects', 'new'], { relativeTo: this._route });
    }

}