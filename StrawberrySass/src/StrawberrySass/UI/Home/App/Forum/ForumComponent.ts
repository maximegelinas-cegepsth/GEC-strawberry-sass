import { Component, OnInit } from '@angular/core';

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

    constructor(private _subjectsService: SubjectService) { }

    ngOnInit(): void {
        this._subjectsService.getAll().subscribe(
            (subjects: Subject[]) => this.subjects = subjects,
            () => console.error('GET Subjects fail...')
        );
    }

}