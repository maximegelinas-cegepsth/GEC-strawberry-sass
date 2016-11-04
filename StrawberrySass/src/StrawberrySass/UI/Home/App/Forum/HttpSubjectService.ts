import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../Shared/App/Core';

import { Subject } from './Subject';
import { SubjectService } from './SubjectService';

@Injectable()
export class HttpSubjectService extends HttpService<Subject> implements SubjectService {

    constructor(http: Http) {
        super(http);
    }

    apiUrl(): string { return '/api/forum/subjects'; }

}