import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../Core';

import { Account } from './Account';
import { AccountService } from './AccountService';

@Injectable()
export class HttpAccountService extends HttpService<Account> implements AccountService {

    login(account: Account): Observable<Account> {
        return this.add(account);
    }

    register(account: Account): Observable<Account> {
        return this.add(account);
    }

    protected apiUrl(): string { return '/api/accounts'; }

}