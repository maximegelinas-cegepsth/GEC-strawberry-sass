﻿import { ReflectiveInjector } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { DataService } from './DataService';

export abstract class HttpService<T extends Object> implements DataService<T> {

    protected headers = new Headers({ 'Content-Type': 'application/json' });

    protected options = new RequestOptions({ headers: this.headers });

    constructor(protected http: Http) { }

    add(data: T): Observable<T> {
        return this.http.post(this.apiUrl(), this.serialize(data), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(key: string): void { throw new Error('Not implemented'); }

    get(key: string): Observable<T> { throw new Error('Not implemented'); }

    getAll(): Observable<T[]> { throw new Error('Not implemented'); }

    update(data: T): Observable<T> { throw new Error('Not implemented'); }

    protected abstract apiUrl(): string;

    protected deserialize(response: Response): any {
        return response.json();
    }

    protected extractData(response: Response) {
        const body = this.deserialize(response);
        return body.data || {};
    }

    protected handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }

        // TODO(maximegelinas) Use a remote logging infrastructure.
        console.error(errMsg);

        return Observable.throw(errMsg);
    }

    protected serialize(data: Object): string {
        return JSON.stringify(data);
    }

}