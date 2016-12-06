import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService {

    private _apiUrl = '/api/members';

    private _headers = new Headers({ 'Content-Type': 'application/json' });

    private _options = new RequestOptions({ headers: this._headers });

    constructor(private _http: Http) { }

    get hasUnread(): Observable<boolean> {
        return this._http.get(this._apiUrl, this._options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
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

}