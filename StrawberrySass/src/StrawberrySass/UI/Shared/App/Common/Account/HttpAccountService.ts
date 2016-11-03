import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../Core';

import { User } from './User';
import { AccountService } from './AccountService';

@Injectable()
export class HttpAccountService extends HttpService<User> implements AccountService {

    logged: EventEmitter<User> = new EventEmitter();

    constructor(http: Http) {
        super(http);
    }

    login(user: User): Observable<User> {
        return this.http.post(`${this.apiUrl()}/login`, this.serialize(user), this.options)
            .map(this.extractData)
            .map((user: any) => {
                this.logged.emit(user);
                return this.extractData;
            })
            .catch(this.handleError);
    }

    register(user: User): Observable<User> {
        return this.http.post(`${this.apiUrl()}/register`, this.serialize(user), this.options)
            .map(this.extractData)
            .map((user: any) => {
                this.logged.emit(user);
                return this.extractData;
            })
            .catch(this.handleError);
    }

    protected apiUrl(): string { return '/api/account'; }

}