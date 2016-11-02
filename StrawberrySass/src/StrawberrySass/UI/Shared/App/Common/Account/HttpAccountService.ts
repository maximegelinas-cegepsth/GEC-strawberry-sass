import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../Core';

import { Account } from './Account';
import { AccountService } from './AccountService';

@Injectable()
export class HttpAccountService extends HttpService<Account> implements AccountService {

    logged: EventEmitter<boolean> = new EventEmitter();

    constructor(http: Http) {
        super(http);
    }

    login(account: Account): Observable<Account> {
        return this.http.post(`${this.apiUrl()}/login`, this.serialize(account), this.options)
            .map(() => {
                this.logged.emit(true);
                return this.extractData;
            })
            .catch(this.handleError);
    }

    register(account: Account): Observable<Account> {
        return this.http.post(`${this.apiUrl()}/register`, this.serialize(account), this.options)
            .map(() => {
                this.logged.emit(true);
                return this.extractData;
            })
            .catch(this.handleError);
    }

    protected apiUrl(): string { return '/api/account'; }

}