import { Observable } from 'rxjs/Observable';

import { DataService } from '../../Core';

import { Letter } from './Letter';

export abstract class LetterService implements DataService<Letter> {

    abstract add(data: Letter): Observable<Letter>;

    abstract delete(key: string): Observable<boolean>;

    abstract get(key: string): Observable<Letter>;

    abstract getAll(): Observable<Letter[]>;

    abstract update(data: Letter): Observable<Letter>;

}