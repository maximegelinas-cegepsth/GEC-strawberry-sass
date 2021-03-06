﻿import { Observable } from 'rxjs/Observable';

export interface DataService<T extends Object> {

    add(data: T): Observable<T>;

    delete(key: string): Observable<boolean>;

    get(key: string): Observable<T>;

    getAll(): Observable<T[]>;

    update(data: T): Observable<T>;

}