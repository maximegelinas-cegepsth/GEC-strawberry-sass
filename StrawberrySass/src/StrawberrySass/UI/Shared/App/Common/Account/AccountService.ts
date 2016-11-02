import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../Core';

import { Account } from './Account';

@Injectable()
export class AccountService extends HttpService<Account> {

    register(account: Account): Observable<Account> {
        return this.add(account);
    }

    protected apiUrl(): string { return '/api/accounts'; }

}