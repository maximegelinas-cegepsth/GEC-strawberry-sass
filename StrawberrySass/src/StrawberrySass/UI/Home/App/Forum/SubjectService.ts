import { Observable } from 'rxjs/Observable';

import { DataService } from '../../../Shared/App/Core';

import { Subject } from './Subject';

export abstract class SubjectService implements DataService<Subject> {

    abstract add(data: Subject): Observable<Subject>;

    abstract delete(key: string): Observable<boolean>;

    abstract get(key: string): Observable<Subject>;

    abstract getAll(): Observable<Subject[]>;

    abstract update(data: Subject): Observable<Subject>;

}