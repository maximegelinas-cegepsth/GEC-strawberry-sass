import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { UserLoginInfo } from './UserLoginInfo';
import { UserRegisterInfo } from './UserRegisterInfo';
import { RegisteredUser } from './RegisteredUser';

@Injectable()
export class AccountService {

    logged: EventEmitter<RegisteredUser> = new EventEmitter();

    private _apiUrl = '/api/account';

    private _headers = new Headers({ 'Content-Type': 'application/json' });

    private _options = new RequestOptions({ headers: this._headers });

    constructor(private _http: Http) { }

    login(user: UserLoginInfo): Observable<RegisteredUser> {
        return this._http.post(`${this._apiUrl}/login`, this.serialize(user), this._options)
            .map(this.extractData)
            .map((user: RegisteredUser) => {
                this.logged.emit(user);
                return this.extractData;
            })
            .catch(this.handleError);
    }

    register(user: UserRegisterInfo): Observable<RegisteredUser> {
        return this._http.post(`${this._apiUrl}/register`, this.serialize(user), this._options)
            .map(this.extractData)
            .map((user: any) => {
                this.logged.emit(user);
                return this.extractData;
            })
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

    private serialize(data: Object): string {
        return JSON.stringify(data);
    }

}