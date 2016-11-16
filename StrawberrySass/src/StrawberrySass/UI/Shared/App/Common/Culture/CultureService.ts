import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { CultureInfo } from './CultureInfo';
import { CultureRequest } from './CultureRequest';

@Injectable()
export class CultureService {

    private _baseApiUrl = '/api';

    private _headers = new Headers({ 'Content-Type': 'application/json' });

    private _options = new RequestOptions({ headers: this._headers });

    constructor(private _http: Http) { }

    set(cultureRequest: CultureRequest): Observable<boolean> {
        console.log(cultureRequest);
        return this._http.post(`${this._baseApiUrl}/culture`, this.serialize(cultureRequest), this._options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAll(): Observable<CultureInfo[]> {
        return this._http.get(`${this._baseApiUrl}/cultures`, this._options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected extractData(response: Response) {
        const data = response.json();
        return data || {};
    }

    private handleError(error: Response | any) {
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